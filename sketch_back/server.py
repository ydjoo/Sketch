import os 
from flask import Flask, render_template, request, redirect, url_for, send_from_directory
from flaskext.mysql import MySQL
from werkzeug.utils import secure_filename

mysql = MySQL()
app = Flask(__name__, static_folder='../sketch_front/build')

app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = '0000'
app.config['MYSQL_DATABASE_DB'] = 'image'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'

mysql.init_app(app)

@app.route('/', methods=['GET','POST'])
def main():
    return render_template('index.html')

@app.route('/fileUpload', methods = ['GET', 'POST'])
def file_upload():
    if request.method == 'POST':
        f = request.files['file']
        f.save('static/uploads/' + secure_filename(f.filename))
        files = os.listdir("static/uploads")

        conn = mysql.connect()
        cursor = conn.cursor()
        sql = "INSWER INTO images (image_name, image_dir) VALUES ('%s', '%s')" % (secure_filename(f.filename), 'uploads/'+secure_filename(f.filename))
        cursor.execute(sql)
        data = cursor.fetchall()

        if not data:
            conn.commit()
            return redirect(url_for("/"))

        else:
            conn.rollback()
            return "upload failed"
        
        cursor.close()
        conn.close()


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

@app.route('/view', method = ['GET','POST'])
def view():
    conn = mysql.connect()
    cursor = conn.cursor()  # connection으로부터 cursor 생성 (데이터베이스의 Fetch 관리)
    sql = "SELECT image_name, image_dir FROM images"  # 실행할 SQL문
    cursor.execute(sql)  # 메소드로 전달해 명령문을 실행
    data = cursor.fetchall()  # 실행한 결과 데이터를 꺼냄
 
    data_list = []
 
    for obj in data:  # 튜플 안의 데이터를 하나씩 조회해서
        data_dic = {  # 딕셔너리 형태로
            # 요소들을 하나씩 넣음
            'name': obj[0],
            'dir': obj[1]
        }
        data_list.append(data_dic)  # 완성된 딕셔너리를 list에 넣음
 
    cursor.close()
    conn.close()
 
    return render_template('index.html', data_list=data_list)  # html을 렌더하며 DB에서 받아온 값들을 넘김

if __name__ == "__main__":
    app.run(host='localhost', port=8888, debug=True)
