import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './model';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setcompletedTodos] = useState<Todo[]>([])

  console.log(todos);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo)
    {
      setTodos([...todos, {id:Date.now(), todo, isDone: false}]);
      setTodo("");
    }
  };

  return (
    <DragDropContent>
    <div className="App">
      <span className="heading">Todo List</span>

      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

      <TodoList 
        todos={todos} 
        setTodos={setTodos}
        completedTodos={completedTodos}
        setcompletedTodos={setcompletedTodos}
        />
    </div>
    </DragDropContent>
  );
}

export default App;
