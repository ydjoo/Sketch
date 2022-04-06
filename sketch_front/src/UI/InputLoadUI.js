import React from 'react';
import { observer } from 'mobx-react';
import { ImageStore } from '../store/ImageStore';

const InputLoadUI = () => {

  const onSelect = e => {
    if (e.target.files.length === 0)
      return;
    const objectURL = URL.createObjectURL(e.target.files[0]);
    ImageStore.previewImage = objectURL;
  }

  return (
    <>
      <input type="file" onChange={onSelect}></input>
    </>
  );
}

export default InputLoadUI;