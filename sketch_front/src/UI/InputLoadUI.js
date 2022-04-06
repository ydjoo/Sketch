import React, { useState, useEffect } from 'react';

const InputLoadUI = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [previewFile, setPreviewFile] = useState();

  // select event 발생 시 preview file state 변경 effect 
  useEffect(() => {
    if (!selectedFile) {
      setPreviewFile(undefined)
      return;
    }
    const objectURL = URL.createObjectURL(selectedFile);
    setPreviewFile(objectURL);
  }, [selectedFile])

  // 버튼 클릭을 통해 upload 파일 선택 시 invoke 
  const onSelect = e => {
    setSelectedFile(e.target.files[0]);
  }

  return (
    <>
      <input type="file" onChange={onSelect}></input>
      {previewFile && <img src={previewFile} />}
    </>
  );
}

export default InputLoadUI;