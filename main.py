import os
from flask import Flask, send_from_directory
from flask_cors import CORS
from threading import Lock

async_mode = None
app = Flask(__name__, static_folder='my-react-app/build') # Change your react-app name 'my-react-app'
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

@app.route('/test-endpoint', methods=['GET'])
def test():
    return "Test endpoint return"

if __name__ == '__main__':
    app.run(host='localhost', port=8890, debug=True) # You can change port, host..