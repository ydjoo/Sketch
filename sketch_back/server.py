import os 
from flask import Flask, render_template, send_from_directory

app = Flask(__name__, static_folder='../sketch_front/build')

@app.route('/', defaults={'path': 'index.html'})
@app.route('/<path:path>')
def serve(path):
    return send_from_directory(app.static_folder, path)

if __name__ == "__main__":
    app.run(host='localhost', port=8888, debug=True)
