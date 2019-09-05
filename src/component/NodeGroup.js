import React from "react";
import styled from "styled-components";
import ElementCard from "./ElementCard";
import faker from "faker";

const NodeGroup = (props) => {
	const { root, leftLeaf, rightLeaf } = props.data;

	return (
		<Container>
			<ParentButton onClick={props.onClickParentButton}>
				Go one level up
			</ParentButton>
			<Root>
				{root && (
					<ElementCard
						onClick={props.onNodeClick}
						image={faker.image.animals()}
						data={root}
					></ElementCard>
				)}
			</Root>
			<Leaves>
				{leftLeaf && (
					<ElementCard
						onClick={props.onNodeClick}
						image={faker.image.animals()}
						data={leftLeaf}
					></ElementCard>
				)}

				{rightLeaf && (
					<ElementCard
						onClick={props.onNodeClick}
						image={faker.image.animals()}
						data={rightLeaf}
					></ElementCard>
				)}
			</Leaves>
		</Container>
	);
};

const Container = styled.div`
	padding: 1em;
`;
const Root = styled.div`
	justify-content: center;
	display: flex;
`;
const Leaves = styled.div`
	display: flex;
`;
const ParentButton = styled.button``;
export default NodeGroup;
