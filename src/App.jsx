import { useState } from 'react';
import Name from './components/Name/Name';
import Button from './components/button/Button';

const App = () => {
	const [stateName, setStateName] = useState('pedro');

	return (
		<>
			<Name
			// changeName={event => getValue(stateName, event, setStateName)}
			></Name>
			<Button action={event => clickMe(setStateName, event)}></Button>
			<h1>{stateName}</h1>
		</>
	);
};

const clickMe = (setStateName, event) => {
	setStateName(event);
};
clickMe();
export default App;
