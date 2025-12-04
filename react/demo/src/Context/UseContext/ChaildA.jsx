import React, { createContext, useState } from 'react'
import ChaildD from './ChaildD'
import ChaildB from './ChaildB'

export const Data = createContext()

function ChaildA() {

    const [name,setname] = useState("shubham")
    const [form,setform] = useState({
        name : "het",
        count : 0
    })

  return (
    <div>
        {/* created context */}
        {/* provide context */}
        {/* use context */}
        <h1>Hello A Component</h1>

        <Data.Provider value={{name,setname,form,setform}}>
            <ChaildB />
            <ChaildD />
        </Data.Provider>
    </div>
  )
}

export default ChaildA
