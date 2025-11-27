import React, { useState } from 'react'

function Funobj() {

    const [data,setdata] = useState({
        name : "harsh",
        count : 0,
        isImage : true
    })
    console.log(data)

  return (
    <div>
      <h1>Hello name : {data.name}</h1>

      <button onClick={()=>setdata({name:"rishi "})}>Change name</button>
       <button onClick={()=>setdata({name:"shubham "})}>Change name2</button>

       <h1>Hello count : {data.count}</h1>
    </div>
  )
}

export default Funobj
