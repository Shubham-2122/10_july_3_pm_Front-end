import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { editusers } from '../Slice/userSlice'

function EditData() {

    const {id} = useParams()
    console.log(id)
    const redirect = useNavigate()

    const dispatch = useDispatch()

    const {users,loading} = useSelector((state)=>state.users)
    console.log(loading)
    console.log(users)

    const [form,setform] = useState({
        id : "",
        name:"",
        email:"",
        password:""
    })

    useEffect(()=>{
        const singleuser = users.filter((data,index)=>data.id === id)
        console.log(singleuser[0])
        setform(singleuser[0])
    },[])

    const getchange=(e)=>{
        setform({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const getsumbit = (e)=>{
             e.preventDefault()

             dispatch(editusers(form))
            redirect("/")
    }




  return (
    <div>
        <h1>Hello update form</h1>
        <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <form onSubmit={getsumbit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">name</label>
                                <input type="text" value={form.name} onChange={getchange} name='name' className="form-control" id="name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" value={form.email} onChange={getchange} name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" value={form.password} onChange={getchange}  name='password' className="form-control" id="exampleInputPassword1" />
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
    </div>
  )
}

export default EditData
