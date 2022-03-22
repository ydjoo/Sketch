import os
from flask import Flask, send_from_directory, send_file, request
from flask_cors import CORS
from werkzeug.utils import secure_filename
from threading import Lock
from PIL import Image
from io import BytesIO
#ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'gif'])

async_mode = None
app = Flask(__name__, static_folder='my-react-app/build')
app.config['SECRET_KEY'] = 'secret!'
thread_lock = Lock()
CORS(app)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')


@app.route('/image_upload', methods=['GET', 'POST'])
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

    return "Test endpoint return"

if __name__ == '__main__':
    app.run(host='localhost', port=8890, debug=True) # You can change port, host..