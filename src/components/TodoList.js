import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {


    const deleteTodoHandler = id =>{
        props.getTodoId(id);
    }

    

    const renderTodoList = props.todos.map(todo => {
        return(
            <TodoItem todoprop={todo} clickHandler={deleteTodoHandler} key={todo.id}/>
        );
    });

    return (
        <ul>
           {renderTodoList}
        </ul>
    );

}



export default TodoList;