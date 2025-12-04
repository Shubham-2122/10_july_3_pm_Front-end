import React from 'react'
import C from './C'

function B({name,setname}) {
  return (
    <div>
       <h1>Hello this B component</h1>
       <h1>B : {name}</h1>
       <button onClick={()=>setname("hello")}>Chnage name 2</button>

       <C name={name} setname={setname} />
    </div>
  )
}

export default B
