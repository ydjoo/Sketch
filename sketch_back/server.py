from flask import Flask, render_template, send_from_directory

# app = Flask(__name__, static_folder='C:/Users/82107/Desktop/DJ/Sketch/sketch_front/build')
app = Flask(__name__)

@app.route("/")
def hello():
    return '<h1>Hello World!!</h1>'
    # return send_from_directory(app.static_folder, 'index.html')

if __name__ == "__main__":
    app.run()