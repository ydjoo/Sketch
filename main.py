import os
from flask import Flask, send_from_directory, send_file, request
from flask_cors import CORS
from werkzeug.utils import secure_filename
from threading import Lock
#ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'gif'])

async_mode = None
app = Flask(__name__, static_folder='my-react-app/public')
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
        print(f)
        # 저장할 경로 + 파일명
        f.save(secure_filename(f.filename))
        return send_file(f, attachment_filename='result_'+f.filename+'.jpg', mimetype='image/jpeg')

    return "Test endpoint return"

if __name__ == '__main__':
    app.run(host='localhost', port=8890, debug=True) # You can change port, host..