import os
import tweepy
import json
from flask import Flask, jsonify

app = Flask(__name__, static_folder='../front-end/build/', static_url_path='/')

consumer_key = os.environ.get('CONSUMER_KEY')
consumer_token = os.environ.get('CONSUMER_SECRET')
access_token_key = os.environ.get('ACCESS_TOKEN')
access_token_key_secret = os.environ.get('ACCESS_TOKEN_SECRET')

auth = tweepy.OAuthHandler(consumer_key, consumer_token)
auth.set_access_token(access_token_key, access_token_key_secret)
api = tweepy.API(auth)


@app.route('/', methods=['GET'])
def home():
    return app.send_static_file('index.html')


@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')


@app.route('/randomtweets', methods=['GET'])
def random_tweets():
    andys = api.get_user(screen_name='andysterks')
    bmws = api.get_user(screen_name='BMW')
    gtrs = api.get_user(screen_name='JustGTRs')

    andys_info = api.user_timeline(screen_name='andysterks')
    bmws_info = api.user_timeline(screen_name='BMW')
    gtrs_info = api.user_timeline(screen_name='JustGTRs')

    users_info = {
        "name": {
            "andy": andys.name,
            "gtr": gtrs.name,
            "bmw": bmws.name
        },
        "username": {
            "andys": andys.screen_name,
            "gtrs": gtrs.screen_name,
            "bmws": bmws.screen_name
        },

        "profile_image": {
            "andys": andys.profile_image_url_https,
            "gtrs": gtrs.profile_image_url_https,
            "bmws": bmws.profile_image_url_https
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
