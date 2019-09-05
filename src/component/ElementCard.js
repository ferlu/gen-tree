import React from "react";
import ReactDOM from "react-dom";
import ElementInfo from "./ElementInfo";
import faker from "faker";
import styled from "styled-components";
const ElementCard = (props) => {
	const handleClick = (e) => {
		e.preventDefault();
		return props.onClick(props.data);
	};
	return (
		<Card onClick={handleClick}>
			<div className="image">
				<img src={props.image} />
			</div>
			<Content>
				<ElementInfo
					username={props.data.username}
					name={props.data.full_name}
					email={props.email}
					product={props.data.product_name}
					category={props.data.category_name}
				></ElementInfo>
			</Content>
		</Card>
	);
};

ElementCard.defaultProps = {
	email: "email@mail.com",
};
const Card = styled.div`
	padding: 1em;
	border: 1px solid #eae0e0;
	border-radius: 15px;
	box-shadow: 0px 0 3px 1px #e8e8e8;
	overflow: hidden;
	text-align: left;
	display: flex;
	width: 25em;
	cursor: pointer;
	margin: 1em;
`;

const Content = styled.div`
	padding-left: 1em;
`;

export default ElementCard;
