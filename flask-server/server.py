from importlib.metadata import requires
import json
from flask import Flask, request, send_file
from PIL import Image


app = Flask(__name__)

@app.route("/result")
def result():
    return {"result": 123}

@app.route("/calculate/double", methods=['POST'])
def double():
    request_data = json.loads(request.data)
    result = int(request_data['input']) * 2
    return {'result': result}

@app.route("/grayscale", methods=['POST'])
def grayscale():
    file = request.files['file']
    image = Image.open(file)
    imageGray = image.convert('L')
    result_name = 'flask_test.jpg'
    imageGray.save('../client/public/%s' % result_name)
    return {'result': result_name}


if __name__=="__main__":
    app.run(debug=True)