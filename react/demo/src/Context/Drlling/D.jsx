import React from 'react'

function D({name,setname}) {
  return (
    <div>
       <h1>Hello this D component</h1>
       <h1> D : {name}</h1>
       <button onClick={()=>setname("data")}>Change name</button>
    </div>
  )
}

export default D
