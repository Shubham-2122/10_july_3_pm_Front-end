import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createdata } from '../Slice/userSlice'
import { useNavigate } from 'react-router-dom'

function NewData() {

    const redirect = useNavigate()

    const [form, setform] = useState({
        id: "",
        name: "",
        email: "",
        password: ""
    })

    const dispatch = useDispatch()

    const getchange = (e) => {
        setform({
            ...form,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
        console.log(form)
    }

    const getsubmit = (e) => {
        e.preventDefault()

        dispatch(createdata(form))
        setform({
            id: "",
            name: "",
            email: "",
            password: ""
        })
        redirect("/")
    }



    return (
        <div>
            <h1>hello New data</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <form onSubmit={getsubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">name</label>
                                <input type="text" name='name' onChange={getchange} value={form.name} className="form-control" id="name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" onChange={getchange} name='email' value={form.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" onChange={getchange} name='password' value={form.password} className="form-control" id="exampleInputPassword1" />
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewData
