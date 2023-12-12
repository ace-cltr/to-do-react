import React, { useState } from 'react';
import main from '../main.css'
import Input from './Input';
import List from './List';

// we use state to when data changes it can re-render
function App() {
  let [todos, setTodos] = useState(
    ['code', 'more code', 'uh..some more code', 'dinner']
  )

  let [editData, setEditData] = useState({
    index: '',
    data: ''
  })
  const inputData = (data) => {
    // console.log(data);
    setTodos([...todos, data])
  }


  const deleteTodo = (data) => {
    let filterData = todos.filter((value, index, arr) =>
      value !== data)
    setTodos([...filterData])
  }

  const editTodo = (index, data) => {
    console.log(index, data);

    setEditData({
      index,
      data
    })
  }
  const updateTodo = (index , data)=>{
    // todos.splice(index,1,data)
    // setTodos([...todos])

    let newTodosArray = todos.map((value, ind, arr) =>{
      if(ind === index){
        return data;
      }
      return value;
    })
    setTodos([...newTodosArray])
    setEditData({
      index:'',
      data:''
    })
  }

  return (
    <div className="container">
      <Input inputData={inputData} updateTodo={updateTodo} editData={editData} />
      <List todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  );
}

export default App;
