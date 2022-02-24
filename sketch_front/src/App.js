import { useState, Component } from "react";
import InputList from "./InputList";

function App() {
  const [inputImages, setInputImages] = useState([
    {
      id: 1,
      imgName: "img1",
      imgUrl: "/home/ydjoo/project/Sketch/sketch_back/images/inputs/input1.png",
    },
  ]);
  const [outputImages, setOutputImages] = useState([
    {
      id: 1,
      imgName: "img1",
      imgUrl:
        "/home/ydjoo/project/Sketch/sketch_back/images/outputs/output1.png",
    },
  ]);

  return (
    <div>
      <h3>Input Image List!</h3>
      <InputList inputImages={inputImages} outputImages={outputImages} />
    </div>
  );
}

export default App;
