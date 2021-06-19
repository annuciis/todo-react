import React, {useEffect, useState} from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap';
import AddForm from './components/AddForm';
import TodoList from './components/TodoList';



function App() {
  const LOCAL_STORAGE_KEY = "todos";
  const  [todos, addTodos] = useState([]);

  const addTodoHandler = todo => addTodos([...todos, {id: uuid(), ...todo}]);

  const removeTodoHandler = id => {
    const newTodoList = todos.filter(todo => todo.id !== id )

    addTodos(newTodoList);

  }

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(savedTodos){
      addTodos(savedTodos);
    }
  }, []) 

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  return (
  <Container fluid>
    <Row>
      <h1>Todo list</h1>
      <Col>
      <AddForm addTodoHandler={addTodoHandler}/>
        <TodoList todos={todos} getTodoId={removeTodoHandler}/> 
      </Col>
    </Row>
  </Container>
  );
}

export default App;
