import React, { useState } from 'react'
import Imge from './Imge'

function Funobj() {

  const [data, setdata] = useState({
    name: "harsh",
    count: 0,
    isImage: true
  })
  console.log(data)

  return (
    <div>
      <h1>Hello name : {data.name}</h1>

      <button onClick={() => setdata({ ...data, name: "rishi " })}>Change name</button>
      <button onClick={() => setdata({ ...data, name: "shubham " })}>Change name2</button>

      <h1>Hello count : {data.count}</h1>

      <button onClick={() => setdata({ ...data, count: data.count + 1 })}>increment</button>
      <button onClick={() => setdata({ ...data, count: data.count - 1 })}>Decrement</button>
      <button onClick={() => setdata({ ...data, count: 0 })}>Zero</button>

      <br /> <br />

      <button onClick={() => setdata({ ...data, isImage: false })}>Hide</button>
      <button onClick={() => setdata({ ...data, isImage: !data.isImage })}>Toggle</button>

      {
        (data.isImage) ? <Imge /> : false
      }

    </div>
  )
}

export default Funobj
