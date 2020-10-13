import React from 'react';
import Tree from 'react-tree-graph';

import './App.css';


function App(props) {
	let { data, onClick } = props;
	return (
		<div>
			<Tree
				data={data}
				height={400}
				width={400}
				animated = { true }
				svgProps={{
					transform: 'rotate(90)',
					className : 'custom'
				}}
				gProps={{
					onClick: onClick,
				}}
			/>
		</div>
	);
}

export default App;
