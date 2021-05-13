import './App.css';
import Header from "./MyComponents/Header";
import {TodoItems} from "./MyComponents/TodoItems";
import {Footer} from "./MyComponents/Footer";
import React, {useState} from 'react';


function App() {

  const onDelete = (todo) =>{
    console.log("I am on delete of ", todo);
    // this way of deleting in react doesnt works!
    // let index = todos.indexOf(todo);
    // todos.slice(index, 1);

    setTodos(todos.filter((e)=>{
      return e !== todo;
    }));
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the Market",
      desc: "You need to go to the market to get this job done"
    },
    {
      sno: 2,
      title: "Purchase Condom",
      desc: "Purchase chocolate flavoured condom"
    },
    {
      sno: 3,
      title: "Trim Yourself",
      desc: "Trim down your bush for better pleasure"
    },
  ]);
  return (
    <div className="App">
      <Header title="MyTodosList" searchBar={false} />
      <TodoItems todos = {todos} onDelete={onDelete}/>
      <Footer/> 
    </div>
  );
}

export default App;
