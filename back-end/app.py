import os
import tweepy
import json
import requests
import base64
from requests_oauthlib import OAuth1
from flask import Flask, jsonify, request

app = Flask(__name__, static_folder='../front-end/build/', static_url_path='/')

consumer_key = os.environ.get('CONSUMER_KEY')
consumer_secret = os.environ.get('CONSUMER_SECRET')
access_token_key = os.environ.get('ACCESS_TOKEN')
access_token_key_secret = os.environ.get('ACCESS_TOKEN_SECRET')

auth1 = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth1.set_access_token(access_token_key, access_token_key_secret)
api = tweepy.API(auth1)

base_url = "https://api.twitter.com/"
oauth_url = 'https://api.twitter.com/oauth2/token'


key_secret = '{}:{}'.format(consumer_key, consumer_secret).encode('ascii')
b64_encoded_key = base64.b64encode(key_secret)
b64_encoded_key = b64_encoded_key.decode('ascii')

auth_headers = {
    'Authorization': 'Basic {}'.format(b64_encoded_key),
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
}

auth_data = {
    'grant_type': 'client_credentials'
}

req = requests.post(oauth_url, headers=auth_headers, data=auth_data)
bearer_token = req.json()['access_token']

SEARCH_HEADER = {
    "Authorization": "Bearer {}".format(bearer_token)
}


@app.route('/', methods=['GET'])
def home():
    return app.send_static_file('index.html')


@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')


@app.route('/randomtweets', methods=['GET'])
def random_tweets():

    andy_params = {
        'screen_name': 'andysterks',
        'count': '10'
    }

    bmw_params = {
        'screen_name': 'BMW',
        'count': '10'
    }

    gtr_params = {
        'screen_name': 'JustGTRs',
        'count': '10'
    }

    search_url = "{}1.1/users/show.json".format(
        base_url)

    andy_req_resp = requests.get(
        search_url, headers=SEARCH_HEADER, params='screen_name={}'.format(andy_params['screen_name']))
    bmw_req_resp = requests.get(
        search_url, headers=SEARCH_HEADER, params='screen_name={}'.format(bmw_params['screen_name']))
    gtr_req_resp = requests.get(
        search_url, headers=SEARCH_HEADER, params='screen_name={}'.format(gtr_params['screen_name']))

    andy_resp_jsonified = andy_req_resp.json()
    bmw_resp_jsonified = bmw_req_resp.json()
    gtr_resp_jsonified = gtr_req_resp.json()

    users_info = {
        "name": {
            "andy": andy_resp_jsonified['name'],
            "gtr": gtr_resp_jsonified['name'],
            "bmw": bmw_resp_jsonified['name'],
        },
        "username": {
            "andys": andy_resp_jsonified['screen_name'],
            "gtrs": gtr_resp_jsonified['screen_name'],
            "bmws": bmw_resp_jsonified['screen_name'],
        },

        "profile_image": {
            "andys": andy_resp_jsonified['profile_image_url_https'],
            "gtrs": gtr_resp_jsonified['profile_image_url_https'],
            "bmws": bmw_resp_jsonified['profile_image_url_https'],
        }
    }

    return jsonify(users_info)


@app.route('/andy', methods=["GET"])
def andy_request():
    andy_get_tweets = api.user_timeline(screen_name="andysterks", count=5)

    andys_tweets_list = []

    for tweets in andy_get_tweets:
        andys_tweets_list.append(tweets.text)

    return jsonify({"andys_tweets": andys_tweets_list})


@app.route('/bmw', methods=["GET"])
def bmw_request():
    bmw_get_tweets = api.user_timeline(screen_name="BMW", count=5)

    bmws_tweets_list = []

    for tweets in bmw_get_tweets:
        bmws_tweets_list.append(tweets.text)

    return jsonify({"bmws_tweets": bmws_tweets_list})


@app.route('/gtr', methods=["GET"])
def gtr_request():
    gtr_get_tweets = api.user_timeline(screen_name="JustGTRs", count=5)

    gtrs_tweets_list = []

    for tweets in gtr_get_tweets:
        gtrs_tweets_list.append(tweets.text)

    return jsonify({"gtrs_tweets": gtrs_tweets_list})


@app.route('/search/<string:name>', methods=['GET'])
def search_user_request(name):

    user = api.get_user(screen_name=name)
    user_tweets = api.user_timeline(screen_name=name, count=5)

    searched_user_tweets = []

    for tweets in user_tweets:
        searched_user_tweets.append(tweets.text)

    user_data = {
        "name": user.name,
        "username": user.screen_name,
        "followers_count": user.followers_count,
        "following": user.friends_count,
        "tweets": searched_user_tweets,
        "profile_image": user.profile_image_url_https
    }

    return jsonify({'user_info': user_data})


if __name__ == "__main__":
    app.run(host='0.0.0.0',
            port=int(os.environ.get("PORT", 5000)))
