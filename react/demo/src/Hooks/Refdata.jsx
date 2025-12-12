import React, { useRef } from 'react'
import Header from '../Layout/Coman/Header'

function Refdata() {

    const refelemet = useRef()

    const getdata=()=>{
        refelemet.current.focus();
    }

    const getstyle=()=>{
        refelemet.current.style.background = "red";
        refelemet.current.style.color = "white";
    }

  return (
    <div>
      <Header />
      <h1>hello this Ref data</h1>

      <input ref={refelemet} type="text" placeholder='Enter your name' name="" id="" />
      <button onClick={getdata}>Focus data</button>

      <button onClick={getstyle}>getstyle</button>

    </div>
  )
}

export default Refdata
