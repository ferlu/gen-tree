import React, { useState } from "react";
import { get } from "lodash";

import NodeGroup from "./NodeGroup";

class GenealogyTree extends React.Component {
	state = {
		maxLevel: 3,
		currentRoot: null,
		currentLeftLeaf: null,
		currentRightLeaf: null,
		parent: null,
	};

	constructor(props) {
		super(props);
		const initialRoot = get(props, "data.attributes[0]", null);
		console.log(
			"TCL: GenealogyTree -> componentWillMount -> initialRoot",
			initialRoot
		);
		const initialLeftLeaf = get(initialRoot, "children[0]", null);
		const initialRightLeaf = get(initialRoot, "children[1]", null);

		const initialState = {
			...this.state,
			currentRoot: initialRoot,
			currentLeftLeaf: initialLeftLeaf,
			currentRightLeaf: initialRightLeaf,
		};

		this.state = initialState;
	}

	compareNodeId = (node, id) => {
		if (node.distributor_id === id) {
			return node;
		} else {
			if (!node.children || !node.children.length) return null;
			const leftNode = node.children[0];
			const rightNode = node.children[1];

			if (leftNode) {
				if (leftNode.distributor_id === id) return leftNode;
				const findInLeft = this.compareNodeId(leftNode, id);
				if (findInLeft) return findInLeft;
			}
			if (rightNode) {
				if (rightNode.distributor_id === id) return rightNode;
				const findInRight = this.compareNodeId(rightNode, id);
				if (findInRight) return findInRight;
			}
			return null;
		}
	};

	findNodeById = (id) => {
		const attributes = this.props.data.attributes;
		const currentNode = attributes[0];
		return this.compareNodeId(currentNode, id);
	};

	getNodes = (leftLeaf, rightLeaf) => {
		this.setState({ leftLeaf, rightLeaf });
	};

	handleNodeClick = (node) => {
		console.log("TCL: GenealogyTree -> handleNodeClick -> node", node);
		const newRoot = node;
		const newLeftLeaf = get(newRoot, "children[0]", null);
		const newRightLeaf = get(newRoot, "children[1]", null);

		this.setState({
			currentRoot: newRoot,
			currentLeftLeaf: newLeftLeaf,
			currentRightLeaf: newRightLeaf,
		});
	};

	handleParentButtonClick = () => {
		const parent = this.findNodeById(this.state.currentRoot.parent_id);
		console.log(
			"TCL: GenealogyTree -> handleParentButtonClick -> this.state.currentRoot.parent_id",
			this.state.currentRoot.parent_id
		);
		console.log("TCL: GenealogyTree -> handleParentButtonClick -> parent", parent);
		this.handleNodeClick(parent);
	};

	render() {
		const { currentRoot, currentLeftLeaf, currentRightLeaf } = this.state;
		console.log("props", this.props);
		console.log("state", this.state);

		return (
			<NodeGroup
				onClickParentButton={this.handleParentButtonClick}
				onNodeClick={this.handleNodeClick}
				data={{
					root: currentRoot,
					leftLeaf: currentLeftLeaf,
					rightLeaf: currentRightLeaf,
				}}
			>
				<p>dfsfsd</p>
			</NodeGroup>
		);
	}
}

export default GenealogyTree;
