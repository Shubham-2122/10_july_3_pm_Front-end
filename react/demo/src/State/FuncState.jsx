// hooks : it's short data use 
// hooks : functionality , it reuse
// 1)useState : function inside define return before
// const [state,setstate] = useState()

import React, { useState } from 'react'
import Imge from './Imge'

function FuncState() {

    // state,function = useState(data)
    const [name,setname] = useState("het patel")
    const [count,setcount] = useState(0)
    const [isImage,setisiamge] = useState(true)

    console.log(name)

    const data=()=>{
        setcount(count+2)
    }


  return (
    <div>
      <h1>Hello name : {name}</h1>
      <button onClick={()=>setname("varj patel")}>Change name</button>
      <button onClick={()=>setname("data")}>Change name2</button>

      <h1>hello count : {count}</h1>
      <button onClick={()=>setcount(count+1)}>Increment</button>
      <button onClick={data}>incmrent + 2</button>
      <button onClick={()=>setcount(count-1)}>decrement</button>
      <button onClick={()=>setcount(0)}>Zero</button>

    <br /> <br />
    <button onClick={()=>setisiamge(false)}>Hide</button>
     <button onClick={()=>setisiamge(true)}>show</button>
     <button onClick={()=>setisiamge(!isImage)}>toggle</button>
      {
        (isImage)?<Imge /> : false
      }
    </div>
  )
}

export default FuncState
