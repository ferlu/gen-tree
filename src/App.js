import React from "react";
import GenealogyTree from "./component/GenealogyTree";
import Daxcsa from "./Daxcsa.json";

const App = (props) => {
	return (
		<div className="container">
			<GenealogyTree {...Daxcsa}></GenealogyTree>
		</div>
	);
};

App.defaultProps = {
	title: "Daxcsa",
};

export default App;
