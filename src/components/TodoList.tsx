import React from 'react'
import { Todo } from '../model';
import './styles.css'
import SingleTodo from './SingleTodo';
import { Droppable } from 'react-beautiful-dnd';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodos: Todo[];
    setcompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({todos, setTodos, completedTodos, setcompletedTodos}) => {
    return (
        <div className="container">
            <Droppable droppableId='TodosList'>
                {
                    (provided) => (
                    <div 
                        className="todos" 
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        >

                        <span className="todo__heading">
                            Active Tasks
                        </span>
                        {
                            todos.map((todo, index) => (
                                <SingleTodo
                                    index={index}
                                    todo={todo}
                                    key={todo.id}
                                    todos={todos}
                                    setTodos={setTodos}
                                />
                            ))
                        }
                        {provided.placeholder}
                    </div>
                    )
                }
            </Droppable>
            <Droppable droppableId='TodosRemove'>
                {
                    (provided) => (
                        <div 
                            className="todos remove"
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            >
                            <span className="todo__heading">
                                Completed Tasks
                            </span>
                            {
                                completedTodos.map((todo, index) => (
                                    <SingleTodo
                                        index={index}
                                        todo={todo}
                                        key={todo.id}
                                        todos={completedTodos}
                                        setTodos={setcompletedTodos}
                                    />
                                ))
                            }
                        {provided.placeholder}
                        </div>
                    )
                }
                
                
            </Droppable>
            
        </div>
    )
}

export default TodoList