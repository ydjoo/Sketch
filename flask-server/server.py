from importlib.metadata import requires
from io import BytesIO
import json
from flask import Flask, request, send_file
from PIL import Image


app = Flask(__name__)

@app.route("/result")
def result():
    return {"result": 'flask_test.jpg'}

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

    img_io = BytesIO()
    imageGray.save(img_io, 'JPEG')
    img_io.seek(0)
    return send_file(img_io, attachment_filename='gray.jpg', mimetype='image/jpeg')


if __name__=="__main__":
    app.run(debug=True)