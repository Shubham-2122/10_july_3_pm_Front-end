// useEffect : Api data show
// reder , re-reder
// function Side effect
// useEffect((function),[opational])

import React, { useEffect, useState } from 'react'

function Effect() {

    const [name,setname] = useState("hello")

    // null data
    // useEffect(()=>{
    //     console.log("without data")
    //     return(()=>{
    //         console.log("with return call")
    //     })
    // })

    // blank array
    //  useEffect(()=>{
    //     console.log("without data")
    //     return(()=>{
    //         console.log("with return call")
    //     })
    // },[])

     useEffect(()=>{
        console.log("without data")
        return(()=>{
            console.log("with return call")
        })
    },[name])

  return (
    <div>
      <h1>{name}</h1>

      <button onClick={()=>setname("shubham")}>Change name</button>
    </div>
  )
}

export default Effect
