import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddData } from './todoSlice'

function AddTodo() {

    const [name,setname] = useState("")

    const dispatch = useDispatch()

    const getdata=(e)=>{
        e.preventDefault() 

        dispatch(AddData(name))
    }

  return (
    <div>
      <form action="">
        <input type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder='Enter your name' />
        <input type="submit" onClick={getdata} />
      </form>
    </div>
  )
}

export default AddTodo
