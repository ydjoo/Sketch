import React from 'react';

const InputLoadUI = () => {
  return (
    <p>
      <form action = "http://localhost:8888/fileUpload" method="POST" enctype = "multipart/form-data"></form>
      <input type = "file" name = "file" />
      <a href="/" onclick = "return confirm('제출 성공! \n 업로드한 이미지를 확인합니다.');">제출하기</a>
    </p>
  );
}

export default InputLoadUI;