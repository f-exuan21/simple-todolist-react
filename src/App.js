import logo from './logo.svg';
import './App.css';
import Todolist from './component/TodoList';
import Save from './component/Save';
import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState([]);

  return (
    <div className="App">
      <div className="content">
        <h1>TODO LIST</h1>
          <Save todo={todo} setTodo={setTodo}/>
          <Todolist todo={todo} setTodo={setTodo}/>
      </div>
    </div>
  );
}

export default App;
