import React, { useState } from 'react'

function FormObj() {

    const [form,setform] = useState({
        name : "",
        surname :"",
        phone :"",
        password :"",
        email : ""
    })

    const getchange=(e)=>{
        setform({
            ...form,
            // name = value 
            [e.target.name] : e.target.value
        })
        console.log(form)
    }
    

  return (
    <div>
       {/* <form action="">
                <input type="text" value={form.name} onChange={(e)=>setform({...form,name:e.target.value})} placeholder='Enter your name' /> <br />
                <input type="text" value={form.surname} onChange={(e)=>setform({...form,surname:e.target.value})} placeholder='Enter your surname' /> <br />
                <input type="tel" value={form.phone} onChange={(e)=>setform({...form,phone:e.target.value})} placeholder='Enter your Phone' /> <br />
                <input type="email" value={form.email} onChange={(e)=>setform({...form,email:e.target.value})} placeholder='Enter your email' /> <br />
                <input type="password" value={form.password} onChange={(e)=>setform({...form,password:e.target.value})}  placeholder='Enter your Password' /> <br />
                <input type="submit" />
            </form> */}


             <form action="">
                <input type="text" value={form.name} name='name' onChange={getchange} placeholder='Enter your name' /> <br />
                <input type="text" value={form.surname} name='surname' onChange={getchange}  placeholder='Enter your surname' /> <br />
                <input type="tel" value={form.phone} name='phone' onChange={getchange}  placeholder='Enter your Phone' /> <br />
                <input type="email" value={form.email} name='email' onChange={getchange}  placeholder='Enter your email' /> <br />
                <input type="password" value={form.password} name='password' onChange={getchange}  placeholder='Enter your Password' /> <br />
                <input type="submit" />
            </form>
    </div>
  )
}

export default FormObj
