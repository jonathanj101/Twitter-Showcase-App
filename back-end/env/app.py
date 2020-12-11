from flask import Flask
import json
import tweepy

f = open('../twitter-creds.json')
data = json.load(f)

# print(data.get("CONSUMER_KEY"))
CONSUMER_KEY = data.get("CONSUMER_KEY")
CONSUMER_SECRET = data.get("CONSUMER_SECRET")
ACCESS_TOKEN = data.get("ACCESS_TOKEN")
ACCESS_TOKEN_SECRET = data.get("ACCESS_TOKEN_SECRET")


auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
auth.set_access_token(ACCESS_TOKEN, ACCESS_TOKEN_SECRET)

api = tweepy.API(auth)

public_tweets = api.home_timeline()

app = Flask(__name__)


@app.route('/home', methods=['GET'])
def index():
    return data
