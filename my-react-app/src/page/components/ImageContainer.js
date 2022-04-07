import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useStores } from '../stores/Context';

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

export default function ImageContainer() {
    const { imageStore } = useStores();

    return (
    <ImageContainerStyle>
        <ImageBoxStyle color='cornflowerblue'>
            <h3>Input Image</h3>
            <ImgStyle src={imageStore.image.inputURL} />
        </ImageBoxStyle>
        <ImageBoxStyle>
            <h3>Output Image</h3>
            {imageStore.image.loading ? (
                <h3>Loading...</h3>
            ) : (
                <ImgStyle src={imageStore.image.outputURL}/>
            )}
        </ImageBoxStyle>
    </ImageContainerStyle>
    );
}