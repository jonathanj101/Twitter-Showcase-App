from flask import Flask

app = Flask(__name__)


@app.route('/')
def index():
    return {
        "lastName": "importa",
        "name": "queti",
    }
