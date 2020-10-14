import React from 'react';
import './App.css';

const data = [
	{
		identifier: 'Object 1',
		key_one: 2,
		key_two: 3,
		key_three: 4,
		dateTime: '2020-10-14T11:25:58.595Z',
	},
	{
		identifier: 'Object 2',
		key_one: 2,
		key_two: 3,
		key_three: 4,
		dateTime: '2020-10-14T11:28:33.041Z',
	},
	{
		identifier: 'Object 3',
		key_one: 2,
		key_two: 3,
		key_three: 4,
		dateTime: '2020-10-14T11:27:30.041Z',
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
		<header className="App-header">
			<div>
				<a 
					href= {window.location.origin + '/tree'}
					target="_blank"
					rel="noopener noreferrer"
				> Tree Visualiser 
				</a> 
			</div>
			<div> 
				<a 
					href= {window.location.origin + '/todo'}
					target="_blank"
					rel="noopener noreferrer"
				> To-DO App</a> 
			</div>
			<div>
				<a 
					href= {window.location.origin + '/vehicle'}
					target="_blank"
					rel="noopener noreferrer"
				> Vehicle Finding Algorithm </a> 
			</div>
			<div className="App">
				<p>Object Sorting Algorithm </p>
				{ data.map ( i => { return ( <div>
					{i.identifier}, {i.dateTime}
				</div>) })
				}
			</div>
		</header>
	);
}

export default App;
