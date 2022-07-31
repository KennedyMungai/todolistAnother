import React from 'react'
import { Todo } from '../model';
import './styles.css'
import SingleTodo from './SingleTodo';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({todos, setTodos}) => {
    return (
        <div className="container">
            <div className="todos">
                
            </div>
            <div className="todos remove">

            </div>
        </div>
    )
}

export default TodoList