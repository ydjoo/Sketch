import React from 'react';
import styled from 'styled-components';
import InputLoadUI from './UI/InputLoadUI';

const WholePage = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #FBF8F1;
  display: flex; 
  justify-content: center;
  align-items: center;
`;
const MainBox = styled.div`
  width: 40vw;
  height: 40vw;
  background-color: #E9DAC1;
  display: flex; 
  flex-direction: column;
`;
const TitleDiv = styled.div`
  width: 100%;
  height: 20%;
  background-color: #BF9270;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;
const LayoutDiv = styled.div`
  width: 100%;
  height: ${props => props.height};
  background-color: ${props => props.bgColor};
  display: flex; 
  justify-content: center; 
  align-items: center; 
`;
const ContentDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex; 
  align-items: center; 
  justify-content: space-between;
`;

const App = () => {
  return (
    <WholePage>
      <MainBox>
        <LayoutDiv
          height="20%"
          bgColor="#BF9270"
          style={{ color: "white", fontSize: "2rem" }}>
          Style Transfer
        </LayoutDiv>
        <LayoutDiv
          height="10%"
        >
          <InputLoadUI />
        </LayoutDiv>
        <ContentDiv>
          <div style={{ border: "1px solid #54BAB9", width: "100%", height: "100%" }}></div>
          <div style={{ width: "100%", height: "30%" }}></div>
          <div style={{ border: "1px solid #54BAB9", width: "100%", height: "100%" }}></div>
        </ContentDiv>
      </MainBox>
    </WholePage>
  );
}

export default App;