import React from "react";
import { observer } from "mobx-react";
import { ImageStore } from "../store/ImageStore";

const ContentUI = observer(() => {
  return (
    <>
      <div style={{ border: "1px solid #54BAB9", width: "100%", height: "50%" }}>
        {ImageStore.previewImage && <img style={{ width: "100%", height: "100%", objectFit: 'fill' }} src={ImageStore.previewImage} />}
      </div>
      <div style={{ width: "100%", height: "30%" }}></div>
      <div style={{ border: "1px solid #54BAB9", width: "100%", height: "50%" }}>
        {ImageStore.previewImage && <img style={{ width: "100%", height: "100%", objectFit: 'fill' }} src={ImageStore.previewImage} />}
      </div>
    </>
  );
})

export default ContentUI;