import { useState, Component } from "react";
import styled from "styled-components";

import InputListItem from "./InputListItem";

const InputList = (props) => {
  const [inputImages, outputImages] = props;
  const [nowImage, setNowImage] = useState(0);

  const handleInputClick = (e) => {
    console.log(e.target.key);
    setNowImage(e.target.key);
  };
  const InputListTag = inputImages.map((image) => (
    <InputListItem
      key={image.id}
      inputUrl={image.Url}
      selected={nowImage === image.id}
      onClick={handleInputClick}
    >
      {image.imgName}
    </InputListItem>
  ));
  return (
    <div>
      <button onClick>submit</button>
      <InputListTag />
    </div>
  );
};

export default InputList;
