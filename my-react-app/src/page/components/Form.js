import React from 'react';
import '../../styles/Form.css';
import styled from 'styled-components';

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


function Form(props) {
    return (
    <FormDiv>
        <input
            type="file"
            name="file"
            placeholder="Upload an image"
            onChange={props.onChange}
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