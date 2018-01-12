import React from "react";
import "./Pictures.css";

const Pictures = props => (

	<div onClick={props.onClick}>
		<img className= "picture" alt="nope" src={props.image} />
	</div>

); 

export default Pictures;