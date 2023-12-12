import React from 'react'

export default function List(props) {
  
  return (

    <ul className="list-group">
      {
        props.todos.length > 0 ? props.todos.map((value, index, arr) =>
        (<li className="list-group-item d-flex justify-content-between" key={index}>
          <div>{value}</div>
          <div>
            <button className='btn btn-warning mx-2' onClick={() => props.editTodo(index, value)}>Edit</button>
            <button className='btn btn-danger' onClick={() => props.deleteTodo(value)}>Delete</button>
          </div>
        </li>))
          : (<li className="list-group-item">Yay! no todos</li>)
      }

    </ul>
  )
}

