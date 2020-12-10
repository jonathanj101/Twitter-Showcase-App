from flask import Flask

app = Flask(__name__)


@app.route('/home', methods=['GET'])
def index():
    return {
        "lastName": 1,
        "name": "queti",
    }
