import React from 'react'
import { Todo } from '../model';
import { AiFillEdit } from 'react-icons/ai';

interface Props {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({todo, todos, setTodos}) => {
    return (
        <form action="" className="todos__single">
            <span className="todos__single--text">
                {todo.todo}
            </span>

            <div className="">
                <span className="icon">
                    <AiFillEdit />
                </span>
                <span className="icon"></span>
                <span className="icon"></span>
            </div>
        </form>
    )
}

export default SingleTodo