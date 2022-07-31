import React, { ChangeEvent, useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  console.log(todo);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <span className="heading">Todo List</span>

      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </div>
  );
}

export default App;
