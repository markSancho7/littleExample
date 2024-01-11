const Name = ({ changeName }) => {
	return <input onChange={event => changeName(event.target.value)}></input>;
};

export default Name;
