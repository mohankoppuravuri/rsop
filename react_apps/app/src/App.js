import React from 'react';
import './App.css';

const data = [
	{
		identifier: 1,
		key_one: 2,
		key_two: 3,
		key_three: 4,
		dateTime: 'd',
	}
];

const sort = (a, b) => {
	if (a.dateTime < b.dateTime)
		return 1;
	else
		return -1;
};

data.sort(sort);
console.log(data)
function App() {
	return (
		<div className="App">
			{ data.map ( i => i.dateTime) }
		</div>
	);
}

export default App;
