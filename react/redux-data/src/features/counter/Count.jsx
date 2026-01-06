import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './countSlice'

function Count() {

  // useContext
    const count = useSelector((data)=>data.counter.value)
    console.log(count)

  // userReducer
  const dispatch = useDispatch()

  return (
    <div>
      <h1>hello counter : {count}</h1>

      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Count
