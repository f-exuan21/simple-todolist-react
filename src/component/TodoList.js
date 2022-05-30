const Todolist = ({ todo }) => {

    const deleteTodo = (e) => {
        e.target.parentElement.remove();
    };

    return (
        <ul>
            {todo.map((e, i) => (
                <li key={i}>{e} <button onClick={deleteTodo}>X</button></li>
            ))}
        </ul>
    );
};

export default Todolist;