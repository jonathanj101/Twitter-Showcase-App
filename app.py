import os
import json
import requests
import base64
from flask import Flask, jsonify

app = Flask(__name__, static_folder='./front-end/build/', static_url_path='/')

consumer_key = os.environ.get('CONSUMER_KEY')
consumer_secret = os.environ.get('CONSUMER_SECRET')
access_token_key = os.environ.get('ACCESS_TOKEN')
access_token_key_secret = os.environ.get('ACCESS_TOKEN_SECRET')

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


@app.route('/', methods=['GET'])
def home():
    return app.send_static_file('index.html')


@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')


@app.route('/randomtweets', methods=['GET'])
def random_tweets():

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
    search_user_url = '{}1.1/statuses/user_timeline.json'.format(base_url)

    andy_get_req = requests.get(
        search_user_url, headers=SEARCH_HEADER, params=andy_params)

    resp_jsonified = andy_get_req.json()

    tweets_list = []

    for tweets in resp_jsonified:
        tweets_list.append(tweets['text'])

    return jsonify({"andys_tweets": tweets_list})


@app.route('/bmw', methods=["GET"])
def bmw_request():
    search_user_url = '{}1.1/statuses/user_timeline.json'.format(base_url)

    bmw_get_req = requests.get(
        search_user_url, headers=SEARCH_HEADER, params=bmw_params)

    resp_jsonified = bmw_get_req.json()

    tweets_list = []

    for tweets in resp_jsonified:
        tweets_list.append(tweets['text'])

    return jsonify({"bmws_tweets": tweets_list})


@app.route('/gtr', methods=["GET"])
def gtr_request():
    search_user_url = '{}1.1/statuses/user_timeline.json'.format(base_url)

    gtr_get_req = requests.get(
        search_user_url, headers=SEARCH_HEADER, params=gtr_params)

    resp_jsonified = gtr_get_req.json()

    tweets_list = []

    for tweets in resp_jsonified:
        tweets_list.append(tweets['text'])

    return jsonify({"gtrs_tweets": tweets_list})


@app.route('/search/<string:name>', methods=['GET'])
def search_user_request(name):
    user_info = {
        'screen_name': name,
        'count': '5'
    }

    search_url = '{}1.1/statuses/user_timeline.json'.format(base_url)

    search_user_req = requests.get(
        search_url, headers=SEARCH_HEADER, params=user_info)

    searched_user_tweets = []

    if (search_user_req.status_code == 401):

        user_not_found = {
            'name': 'user name not found',
            'username': 'user username not found',
            'text': 'It might be that you have a typo or not typing the username correctly'
        }
        return jsonify({'user_not_found': user_not_found})

    else:
        resp_jsonified = search_user_req.json()

        for tweets in resp_jsonified:
            searched_user_tweets.append(tweets['text'])

        user_data = {
            "name": resp_jsonified[0]['user']['name'],
            "username": resp_jsonified[0]['user']['screen_name'],
            "followers_count": resp_jsonified[0]['user']['followers_count'],
            "following": resp_jsonified[0]['user']['friends_count'],
            "tweets": searched_user_tweets,
            "profile_image": resp_jsonified[0]['user']['profile_image_url_https']
        }

        return jsonify({'user_info': user_data})


if __name__ == "__main__":
    app.run(host='0.0.0.0',
            port=int(os.environ.get("PORT", 5000)))
