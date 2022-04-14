import styled from 'styled-components';
import React  from 'react';
import { useStores } from '../stores/Context';
import { observer } from 'mobx-react';

const ImageContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const ImageBoxStyle = styled.div`
  background-color: ${props => props.color || "palevioletred"};
  width : 500px;
  height : 400px;
`;

const ImgStyle = styled.img`
  max-width: 400px;
  max-height: 300px;
  margin-bottom: 20px;
`;

function ImageContainer() {
    const { imageStore } = useStores();

    return (
    <ImageContainerStyle>
        <ImageBoxStyle color='cornflowerblue'>
            <h3>Input Image</h3>
            <ImgStyle src={imageStore.inputURL} />
        </ImageBoxStyle>
        <ImageBoxStyle>
            <h3>Output Image</h3>
            {imageStore.loading ? (
                <h3>Loading...</h3>
            ) : (
                <ImgStyle src={imageStore.outputURL}/>
            )}
        </ImageBoxStyle>
    </ImageContainerStyle>
    );
}

export default observer(ImageContainer);