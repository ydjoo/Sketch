import React, { useState, useEffect } from 'react';
import '../../styles/Form.css';
import styled from 'styled-components';
import { useStores } from '../stores/Context';

const FormDiv = styled.div`
    background-color: #fcf2bce1;
    min-height: 10vh;
    padding-top: 3vh;
    padding-bottom: 3vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: rgb(53, 8, 253);
`;


function Form() {
    const [inputImage, setInput] = useState('')
    const { imageStore } = useStores();

    const fetchImage = async (data) => {
        const res = await fetch(
            'http://localhost:8890/image_greyscale',
            {method: 'POST', body: data}
        )
        const imageBlob = await res.blob();
        imageStore.createOutputURL(imageBlob);
        //const imageObjectURL = URL.createObjectURL(imageBlob);
        //setOutput(imageObjectURL);
    };
    
    
    useEffect(() => {
        if (!inputImage || inputImage === '' ) return;
        imageStore.createInputURL(inputImage);

        const data = new FormData();
        data.append('file', inputImage);
        
        imageStore.changeLoading();
        fetchImage(data).then(() => imageStore.changeLoading());

    }, [inputImage]);

    function onImageChange(e) {
        setInput(e.target.files[0]);
    }

    return (
    <FormDiv>
        <input
            type="file"
            name="file"
            placeholder="Upload an image"
            onChange={onImageChange}
        />
    </FormDiv>
    );
}

/*
function Form() {
    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
    }
  
    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
        </form>
    );
}
*/

export default Form;