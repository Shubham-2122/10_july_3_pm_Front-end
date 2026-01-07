import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo } from './todoSlice'

function Todolist() {
  
    // select
    const {todo} = useSelector((data)=>data.todos)
    console.log(todo)

    const dispatch = useDispatch()

    return (
    <div>
      <ul>
        {
            todo.map((data,index)=>{
                return(
                    <li key={index}>{data} <button>Edit</button> <button onClick={()=>dispatch(deleteTodo(index))}>Delete</button></li>
                )
            })
        }
      </ul>
    </div>
  )
}

export default Todolist
