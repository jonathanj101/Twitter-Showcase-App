import os
import tweepy
import json
from flask import Flask, jsonify, request
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)

consumer_key = os.environ.get('CONSUMER_KEY')
consumer_token = os.environ.get('CONSUMER_SECRET')
access_token_key = os.environ.get('ACCESS_TOKEN')
access_token_key_secret = os.environ.get('ACCESS_TOKEN_SECRET')

auth = tweepy.OAuthHandler(consumer_key, consumer_token)
auth.set_access_token(access_token_key, access_token_key_secret)
api = tweepy.API(auth)


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
    gtr_get_tweets = api .user_timeline(screen_name="JustGTRs", count=5)

    gtrs_tweets_list = []

    for tweets in gtr_get_tweets:
        gtrs_tweets_list.append(tweets.text)

    return jsonify({"gtrs_tweets": gtrs_tweets_list})


# @app.route('/search/:<name>', methods=['GET'])
# def maybe(name):
#     print(name)

    return '{name}'.format(name)
