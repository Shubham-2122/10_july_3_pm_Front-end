import React, { useReducer } from 'react'
import Header from '../Layout/Coman/Header'

const initialArg = 0

export const reducer=(state,action)=>{
    switch (action) {
        case 'increment':
            return state + 1
            break;
        case 'decrement': 
            return state - 1
            break;
        case 'zero':
            return initialArg;
        default:
            return state;
            break;
    }
}

function HelloReducer() {


    const [count,dispatch] = useReducer(reducer,initialArg)
    
  return (
    <div>
      <Header />
        

      <h1>Hello reducer fucntion</h1>
      <h1>Count : {count}</h1>

      <button className='btn btn-info' onClick={()=>dispatch('increment')}>Increment</button>
       <button className='btn btn-info' onClick={()=>dispatch('decrement')}>decrement</button>
    </div>
  )
}

export default HelloReducer
