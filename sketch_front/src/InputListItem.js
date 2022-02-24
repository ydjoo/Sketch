import { Component } from "react";
import styled from "styled-components";

const InputListItem = (props) => {
  const [key, inputUrl, selected] = props;
  return <div>{inputUrl}</div>;
};

export default InputListItem;
