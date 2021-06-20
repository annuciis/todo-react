import React, {useEffect, useState} from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap';
import AddForm from './components/AddForm';
import TodoList from './components/TodoList';
import Search from './components/Search'




function App() {
  const LOCAL_STORAGE_KEY = "todos";
  const  [todos, addTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);


  const addTodoHandler = todo => {
    return addTodos([...todos, {id: uuid(), ...todo}])
  };



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


  const searchHandler = searchTerm => {

    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newTodoList = todos.filter((todo) => {
        return todo.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newTodoList);
    } else {
      setSearchResults(todos);
    }

  };



  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));

  }, [todos]);




  return (
  <Container fluid>
    <Row>
      <h1>Todo list</h1>
      <Col>
        <AddForm addTodoHandler={addTodoHandler}/>
        <TodoList todos={searchTerm.length < 1 ? todos : searchResults} getTodoId={removeTodoHandler} /> 
        <Search style={searchResults.length < 1 || searchTerm === "" ? "" : "filled"} term={searchTerm} searchKeyword={searchHandler}/>
      </Col>
    </Row>
  </Container>
  );
}

export default App;
