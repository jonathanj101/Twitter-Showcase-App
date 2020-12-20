import os
import tweepy
import json
from flask import Flask, jsonify, request
from dotenv import load_dotenv
load_dotenv()

consumer_key = os.environ.get('CONSUMER_KEY')
consumer_token = os.environ.get('CONSUMER_SECRET')
access_token_key = os.environ.get('ACCESS_TOKEN')
access_token_key_secret = os.environ.get('ACCESS_TOKEN_SECRET')

auth = tweepy.OAuthHandler(consumer_key, consumer_token)
auth.set_access_token(access_token_key, access_token_key_secret)
api = tweepy.API(auth)

app = Flask(__name__)


@app.route('/randomTweets', methods=['GET'])
def index():
    andys = api.get_user(screen_name='andysterks')
    gtrs = api.get_user(screen_name='JustGTRs')
    bmws = api.get_user(screen_name='BMW')
    andys_info = api.user_timeline(screen_name='andysterks', count=5)
    gtrs_info = api.user_timeline(screen_name='JustGTRs', count=5)
    bmws_info = api.user_timeline(screen_name='BMW', count=5)

    andys_tweets_list = []
    gtrs_tweets_list = []
    bmws_tweets_list = []

    for tweets in andys_info:
        andys_tweets_list.append(tweets.text)

    for tweets in gtrs_info:
        gtrs_tweets_list.append(tweets.text)

    for tweets in bmws_info:
        gtrs_tweets_list.append(tweets.text)

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
        "tweets": [
            [andys_tweets_list],
            [gtrs_tweets_list],
            [bmws_tweets_list]
        ],
        "profile_image": {
            "andys": andys.profile_image_url_https,
            "gtrs": gtrs.profile_image_url_https,
            "bmws": bmws.profile_image_url_https
        }
    }

    return jsonify(users_info)


@app.route('/search/:<name>', methods=['GET'])
def maybe(name):
    print(name)

    return '{name}'.format(name)
