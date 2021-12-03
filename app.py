from flask import Flask, send_from_directory, request
from flask_cors import CORS
import dailyprofits

app = Flask(__name__, static_folder='client/build', static_url_path='')
cors = CORS(app)


@app.route('/dailyprofit/', methods=['POST'])
def get_daily_profits():
    print(request.json)
    return dailyprofits.dailyProfits()


@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')


if __name__ == '__main__':
    app.run()
