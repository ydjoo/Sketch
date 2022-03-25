import os
from os import environ

from flask import Flask, send_from_directory, send_file, request
from flask_cors import CORS
from werkzeug.utils import secure_filename
#from requests import get

from threading import Lock
from PIL import Image
from io import BytesIO
#ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'gif'])

#IS_DEV = environ["FLASK_ENV"] == "development"
#WEBPACK_DEV_SERVER_HOST = "http://localhost:3000"

async_mode = None
app = Flask(__name__, static_folder='my-react-app/build')
app.config['SECRET_KEY'] = 'secret!'
thread_lock = Lock()
CORS(app)

'''
def proxy(host, path):
    response = get(f"{host}{path}")
    excluded_headers = [
        "content-encoding",
        "content-length",
        "transfer-encoding",
        "connection",
    ]
    headers = {
        name: value
        for name, value in response.raw.headers.items()
        if name.lower() not in excluded_headers
    }
    return (response.content, response.status_code, headers)
'''

@app.route('/', defaults={'path': 'index.html'})
@app.route('/<path:path>')
def serve(path):
    #if IS_DEV:
    #    return proxy(WEBPACK_DEV_SERVER_HOST, os.path.join(app.static_folder, request.path))
    return send_from_directory(app.static_folder, path)


@app.route('/image_greyscale', methods=['GET', 'POST'])
def process_image():
    if request.method == 'POST':
        f = request.files['file']
        img = Image.open(f)

        print(img.size)
        img = img.convert('L') # convert to greyscale
        
        img_io = BytesIO()
        img.save(img_io, 'JPEG', quality=70)
        img_io.seek(0)
        #f.save(secure_filename(f.filename))

        return send_file(img_io, attachment_filename='result_'+f.filename+'.jpg', mimetype='image/jpeg')

    return "Request method should be in 'POST'"

if __name__ == '__main__':
    app.run(host='localhost', port=8890, debug=True) # You can change port, host..