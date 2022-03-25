import React ,{useEffect, useState} from 'react';
import '../../styles/JumboTron.css';

export default function Jumbotron(props) {
	const [title] = useState('');
  	const [content] = useState('');

	return (
			<div className="jumbotron jumbotron-fluid">
  				<div className="container">
    				<h1>{props.title}</h1>
    				<h3>{props.content}</h3>
  				</div>
			</div>
	);
  }