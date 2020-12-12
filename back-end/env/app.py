import os
import tweepy
import json
from flask import Flask
from dotenv import load_dotenv
load_dotenv()

consumer_key = os.environ.get('CONSUMER_KEY')
consumer_token = os.environ.get('CONSUMER_SECRET')
access_token_key = os.environ.get('ACCESS_TOKEN')
access_token_key_secret = os.environ.get('ACCESS_TOKEN_SECRET')
print("consumer key {}, consumer token {}, access token {} and acess token secret {}".format(
    consumer_key, consumer_token, access_token_key, access_token_key_secret))


# f = open('../twitter-creds.json')
# data = json.load(f)

# print(data.get("CONSUMER_KEY"))
# CONSUMER_KEY = data.get("CONSUMER_KEY")
# CONSUMER_SECRET = data.get("CONSUMER_SECRET")
# ACCESS_TOKEN = data.get("ACCESS_TOKEN")
# ACCESS_TOKEN_SECRET = data.get("ACCESS_TOKEN_SECRET")


# auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
# auth.set_access_token(ACCESS_TOKEN, ACCESS_TOKEN_SECRET)

# api = tweepy.API(auth)

# public_tweets = api.home_timeline()

app = Flask(__name__)


@app.route('/home', methods=['GET'])
def index():
    return "<h1>hello</h1>"
