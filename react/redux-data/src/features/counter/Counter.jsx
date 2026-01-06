import React from 'react'
import { useDispatch } from 'react-redux'
import { Zero } from './countSlice'

function Counter() {

    const dispatch = useDispatch()

  return (
    <div>
      <button onClick={()=>dispatch(Zero())}>Zero</button>
    </div>
  )
}

export default Counter
