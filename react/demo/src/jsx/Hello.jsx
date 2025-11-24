// jsx :- javascript syntax Xml/
// html read and write
// js vs jsx :- 0.1s
// javscript varibale {}

import React from 'react'

function Hello() {
   const data = "Rushi"
   console.log(data)

   let person = {
    id : 1,
    name : "vraj",
    course : "Front-end"
   }

   let htmldata = <ol>
    <li>Home</li>
    <li>Home</li>
    <li>Home</li>
    <li>Home</li>
   </ol>



  return (
    <>
      <h1>Hello this jsx compo</h1>
    
        <h2>hello name : {data}</h2>

        <h1>Hello name : {person.name}</h1>

        {5+5}

        {htmldata}

        {
            console.log("hello bosy")
        }

    </>
  )
}

export default Hello
