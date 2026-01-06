import React from 'react'
import { useSelector } from 'react-redux'

function Todolist() {
  
    // select
    const {todo} = useSelector((data)=>data.todos)
    console.log(todo)
    return (
    <div>
      <ul>
        {
            todo.map((data,index)=>{
                return(
                    <li key={index}>{data} <button>Edit</button> <button>Delete</button></li>
                )
            })
        }
      </ul>
    </div>
  )
}

export default Todolist
