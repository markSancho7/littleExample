import { useState } from 'react';
import Name from './components/Name/Name';
import Button from './components/button/Button';

const App = () => {
	const [stateName, setStateName] = useState('pedro');

	return (
		<>
			<Name changeName={event => changeName(event, setStateName)}></Name>
			<Button action={sayHello}></Button>
			<h1>{stateName}</h1>
		</>
	);
};
const changeName = (event, setStatename) => {
	setStatename(event);
};
const sayHello = () => {
	console.log('sayHellooooo');
};

export default App;
