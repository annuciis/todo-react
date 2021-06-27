import React, {useEffect, useState} from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap';
import AddForm from './components/AddForm';
import TodoList from './components/TodoList';
import Search from './components/Search';
import ModalWindow from './components/ModalWindow'




function App() {
  const LOCAL_STORAGE_KEY = "todos";
  const  [todos, addTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  
  //for modal window
  const [open, setOpen] = useState(false);
  const [currentID, setID] = useState("");
  const [currentTodo, setCurrentTodo] = useState("");


  const addTodoHandler = todo => {
    return addTodos([...todos, {id: uuid(), ...todo}])
  };



  const removeTodoHandler = id => {
    setOpen(!open);
    setID(id);

    const clickedTodo = todos.filter(todo => todo.id === id )
 

    setCurrentTodo(clickedTodo[0].name)

  }

   
   
  
  const confirm = () => {

    const newTodoList = todos.filter(todo => todo.id !== currentID )
    addTodos(newTodoList);
    
    setOpen(!open);
  
  }
  
  
  const cancel = () => {
      
    addTodos(todos)
    setOpen(!open);
  
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
        <ModalWindow style={open  ? "show" : "hidden"} confirm={confirm} close={cancel} name={currentTodo}  />
      </Col>
    </Row>
  </Container>
  );
}

export default App;
