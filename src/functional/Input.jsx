import React, { useEffect, useState } from 'react'

// press "ctrl + space" to get the option to auto import any component

export default function Input(props) {
  console.log(props);
  let [todo, setTodo] = useState([''])
  let [error , setError] = useState(false)

  const changeInput = (event) => {
    setTodo(event.target.value);

    if (event.target.value.length === 0){
      setError(true)
    } else {
      setError(false)
    }
  }

  const submitButton = (event) => {
    event.preventDefault();
    if(todo.length > 0 ){
      if(props.editData.index !== ''){
        props.updateTodo(props.editData.index, todo);
      }else{
        props.addTodo(todo)
      }
    } else {
      setError(true)
    }

    
    setTodo('')
  }
  useEffect(()=>{
    setTodo(props.editData.data);
  }, [props.editData.data])

  // two way binding : 
  return (
    <form className="row mt-4" onSubmit={submitButton}>
      <div className="col-10">
        <input type="text" className="form-control" placeholder="Add todo"
        
          value={todo} onChange={changeInput} />
         { error && <p className='text-danger'>Please enter todo</p> } 
      </div>
      <div className="col-2">
        <button type="submit" className="btn btn-primary mb-3">
          {props.editData.index === '' ? 'Add' : 'Update'}
        </button>
      </div>
    </form>
  )
}


// if && both statement are true react print the second agru by default