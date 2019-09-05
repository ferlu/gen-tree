import React from "react";
import ReactDOM from "react-dom";

const ElementInfo = (props) => {
	return (
		<div>
			<p className="name">{props.name}</p>
			<p className="userData">
				<span>{props.email}</span>
				<br></br>
				<span>{props.product}</span>
				<br></br>
				<i>{props.category}</i>
			</p>
			<p className="username">@{props.username}</p>
		</div>
	);
};

export default ElementInfo;
