import React, {useState, useEffect} from 'react';
import './App.css';
import Node from './node';
const data = {
		a : ['b', 'c'],
		c : ['d', 'e'],
		d : ['f', 'g'],
		e : ['h', 'i'],
		f : ['j', 'k'], 
		g : ['l', 'm'],
};

let makeData = (currentRef) => {
	if (!data[currentRef.name])
		return ;
	let [left, right] = data[currentRef.name];
	let newLeft  = {name: left, children : []};
	let newRight = {name: right, children : []};
	currentRef.children.push (newLeft);
	currentRef.children.push (newRight);
	makeData(newLeft);	
	makeData(newRight);	
};

function App() {
	const [data, setData]  = useState ({});
	
	useEffect (() => {
		let tempRef = { name : 'a', children : []}
		makeData (tempRef);
		setData(tempRef)
	}, []);

	function onClick(event, nodeKey) {
		let tempRef = {name : nodeKey, children:[]}
		makeData (tempRef);
		setData(tempRef);
	}

	return (
		<div className="App">
			<Node onClick = { (e, n) => {onClick (e, n)}} data = {data} />
		</div>
	);
}

export default App;
