import React from 'react';

function App() {
	const [data, setData] = React.useState (['Example 1','Example 2', 'Example 3']);
	const [task, setTask] = React.useState ('');
	return (
		<div className="App">
			{data.map ( (value, i) => { 
				return ( <div key = {i} style ={{padding: '5px', display : 'flex'}}>
					<div style = {{padding : '5px'}} > {value} </div>
					<div style = {{background: 'red', padding: '5px', margin : '5px'}} onClick = { () =>  { 
						let temp = data.filter ( (v, idx) => { return (idx != i) } ) 
						setData ( temp)  
					}}> 
						delete 
					</div>


					<div style = {{ background : 'green', padding: '5px', margin : '5px'}} onClick = { () =>  { 
						setTask (data[i]);
						let temp = data.filter ( (v, idx) => { return (idx != i) } ) 
						setData ( temp)  
					}}> 
						Modify
					</div>
				</div>
				)
			})}
			<div style ={{display : 'flex'}}>
				<label>
					<input type="text" value={task} onChange={ (e) =>  setTask(e.target.value)} />
				</label>
				<input type="submit" value="Add" onClick = { () => {if (!task) return;  setData ( [...data, task]); setTask('')} }/>
			</div>
		</div>
	);
}

export default App;
