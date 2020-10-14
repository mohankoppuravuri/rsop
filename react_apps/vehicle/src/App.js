import React from 'react';
import './App.css';

const data = {
	vehicle_1: [10.00, 11.30],
	vehicle_2: [12.30,14.30],
	vehicle_3: [14.30, 15.00],
	vehicle_4: [16.00, 17.00],
	vehicle_5: [ null, null],
	vehicle_6: [ null, null],
};
console.log('Data for vehicle slots', data);

const getVehicles = (start, end) => {
	let vehicles = [];
	for (let vehicle in data) {
		let temp_start = data[vehicle][0];
		let temp_end   = data[vehicle][1];
		if (!temp_end || !temp_start) {
			vehicles.push (vehicle);
			continue;
		}
		if (start <= temp_start && temp_start < end)
			continue;

		if ( temp_start <= start  && start < temp_end)
			continue;

		vehicles.push (vehicle);
	}
	return vehicles;
};

function App() {
	const [start, setStart] = React.useState ('');
	const [end,   setEnd]   = React.useState ('');
	const [vehicles,   setVehicles]   = React.useState ([]);
	return (
		<div className="App">
			<header className="App-header">
				<p>
					Vehicle Finding Algorithm.
				</p>
				Enter the time during which you want vehicle.
				<div>
					<input
						style = {{padding : '8px'}}
						placeholder = "start time"
						value = {start}
						onChange = { (e) => {
							setStart (e.target.value)
						}}
					> 
					</input>
					<input
						style = {{padding : '8px'}}
						placeholder = "End time"
						value = {end}
						onChange = { (e) => {
							setEnd (e.target.value)
						}}
					> 
					</input>

					<div style = {{cursor: 'pointer', background: 'green', borderRadius : '5%', margin : '5px'}} onClick = { () => {
						if (!start || !end)
							alert ('No start/End time');
						let temp = start.split(':');
						if (temp.length != 2)
							return alert ('Use semi colom for start time');
						if (isNaN (temp[0]))
							return alert ('startging Hours is not a number');
						if (isNaN (temp[1]))
							return alert ('starting Minutes is not a number');

						temp = end.split(':');
						if (temp.length != 2)
							return alert ('Use semi colom for end time');
						if (isNaN (temp[0]))
							return alert ('End Hours is not a number');
						if (isNaN (temp[1]))
							return alert ('End Minutes is not a number');

						setVehicles (getVehicles ( Number (start.split(':').join('.')), Number (end.split(':').join('.')) ));
					}}>
						Search
					</div>
					{	
						vehicles.map ( value => value)	
					}
				</div>

				<p>Note: 1. Static data is taken for vehicle slots data. You can see this in the console logs. </p>
				<p>Note: 2. Enter the time as 24 hours. Example, 4:30, 4:00, 16:00 etc. </p>
			</header>
		</div>
	);
}

export default App;
