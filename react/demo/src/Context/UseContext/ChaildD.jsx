import React, { useContext } from 'react'
import { Data } from './ChaildA'

function ChaildD() {

    const {name,setname} = useContext(Data)

  return (
    <div>
      <h1>Hello D Component</h1>
      <h1>D : {name}</h1>
      <button onClick={()=>setname("sujal")}>Chaneg name</button>
   

    </div>
  )
}

export default ChaildD
