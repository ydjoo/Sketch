import React from 'react';
import styled from 'styled-components';

const JumboTronDiv = styled.div`
	background-color: #282c34;
	min-height: 20vh;
	padding-bottom: vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: white;
`;

export default function Jumbotron(props) {
	return (
		<JumboTronDiv>
			<div className="container">
				<h1>{props.title}</h1>
				<h3>{props.content}</h3>
			</div>
		</JumboTronDiv>
	);
  }