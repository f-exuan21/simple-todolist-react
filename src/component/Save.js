let idx = 0;

const Save = ({ todo, setTodo }) => {
    const save = () => {
        const inputValue = document.getElementById("todoInput");
        let copy = [...todo];
        copy.push({id: ++idx, text: inputValue.value, done: true});
        inputValue.value = "";
        setTodo(copy);
    };

    return (
        <div className="save">
          <input id="todoInput" type={"text"}/>
          <button type="button" onClick={()=>save()}>저장</button>
        </div>
    );
}

export default Save;
