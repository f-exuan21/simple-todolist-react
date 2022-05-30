const Todolist = ({ todo, setTodo }) => {
    const deleteTodo = (e) => {
        let id = e.target.attributes["data-id"].value;
		const updatedObject = [...todo];
		updatedObject.map((e) => {
			if(Number(e.id) === Number(id)) {
				e.done = false;
			}
		});
		setTodo(updatedObject);
    };

    return (
        <ul>
            {todo.map((e, i) => (
				<li key={i}>
				{e.done ? e.text : <del>{e.text}</del>}
				{e.done ? <button data-id={e.id} onClick={deleteTodo}>X</button> : null}
                </li>
            ))}
        </ul>
    );
};

export default Todolist;
