import React, { useEffect, useState } from 'react'
import Aheader from '../Acoman/Aheader'
import axios from 'axios'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';



function UserGet() {
    useEffect(() => {
        getapi()
    }, [])
    const getapi = async () => {
        const res = await axios.get("http://localhost:3000/users")
        console.log(res.data);
        setform(res.data)

    }
    const [form, setform] = useState([])

    const del = async (id) => {
        const res = await axios.delete(`http://localhost:3000/users/${id}`)
        console.log(res.data);
        getapi()

    }
    const view = async (id) => {
        const res = await axios.get(`http://localhost:3000/users/${id}`)
        console.log(res.data)
    }
    const [edit, setedit] = useState(null)

    const [edited, setedited] = useState({
        id: "",
        name: "",
        email: "",
        password: ""
    })
    const getdata = (data) => {
        console.log(data);
        setedit(data)
        setedited(data)

    }
    const getchage = (e) => {
        setedited({
            ...edited,
            [e.target.name]: e.target.value
        })
    }
    const submitdata = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.put(`http://localhost:3000/users/${edited.id}`, edited)
            console.log(res.data);
            setedited({
                id: "",
                name: "",
                email: "",
                password: ""
            })
            setedit(null)
            getapi()
        } catch (error) {
            console.log("Api not found", error);

        }
    }
    return (
        <div>
            <Aheader />
            <table className="table">
                <thead>
                    <tr className='text-center'>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        form && form.map((data, index) => {
                            return (
                                <tr key={index} className='text-center'>
                                    <th >{data.id}</th>
                                    <td>{data.name}</td>
                                    <td> {data.email}</td>
                                    <td>{data.status}</td>
                                    <td>
                                        <button className='btn btn-info' onClick={() => { view(data.id) }} >View</button>
                                        <button className='btn btn-success mx-2' onClick={() => { getdata(data) }} >Edit</button>
                                        <button className='btn btn-danger' onClick={() => { del(data.id) }} >Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }


                </tbody>
            </table>

            {
                edit && (
                    <div className="container">
                        <MDBContainer fluid>

                            <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
                                <form action="" onSubmit={submitdata}>
                                    <MDBCardBody>
                                        <MDBRow>
                                            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                                                <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                                <div className="d-flex flex-row align-items-center mb-4 ">
                                                    <MDBIcon fas icon="user me-3" size='lg' />
                                                    <MDBInput label='Your Name' value={edited.name} onChange={getchage} name='name' id='form1' type='text' className='w-100' />
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <MDBIcon fas icon="envelope me-3" size='lg' />
                                                    <MDBInput label='Your Email' value={edited.email} onChange={getchage} name='email' id='form2' type='email' />
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <MDBIcon fas icon="lock me-3" size='lg' />
                                                    <MDBInput label='Password ' value={edited.password} onChange={getchage} name='password' id='form3' type='password' />
                                                </div>

                                                {/* <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="key me-3" size='lg' />
                                    <MDBInput label='Repeat your password' id='form4' type='password' />
                                </div> */}

                                                <div className='mb-4'>
                                                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                                                </div>

                                                <MDBBtn className='mb-4' size='lg'>Register</MDBBtn>

                                            </MDBCol>

                                            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                                                <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
                                            </MDBCol>

                                        </MDBRow>
                                    </MDBCardBody>
                                </form>
                            </MDBCard>

                        </MDBContainer>

                    </div>
                )
            }


        </div>
    )
}

export default UserGet
