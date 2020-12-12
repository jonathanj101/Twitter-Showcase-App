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


# f = open('../twitter-creds.json')
# data = json.load(f)

# print(data.get("CONSUMER_KEY"))
# CONSUMER_KEY = data.get("CONSUMER_KEY")
# CONSUMER_SECRET = data.get("CONSUMER_SECRET")
# ACCESS_TOKEN = data.get("ACCESS_TOKEN")
# ACCESS_TOKEN_SECRET = data.get("ACCESS_TOKEN_SECRET")


# print(dir(user.screen_name))
# print(" user name {}".format(user.screen_name))
# print("user count {}".format(user.followers_count))
# for friend in user.friends():
#     print("friend screen name {}".format(friend.screen_name))

# public_tweets = api.home_timeline()

app = Flask(__name__)


@app.route('/home', methods=['GET'])
def index():
    user = api.get_user('andysterks')
    new_user = {
        "name": user.screen_name,
        "followers_count": user.followers_count
    }
    return jsonify(new_user)
