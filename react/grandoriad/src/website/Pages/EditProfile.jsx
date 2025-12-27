import React, { useEffect, useState } from 'react'
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
import Header from '../coman/Header';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function EditProfile() {

    const redirect = useNavigate()

    const [edit, setedit] = useState({
        id: "",
        name: "",
        email: "",
        status: "",
        password: ""
    })

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get(`http://localhost:3000/users/${localStorage.getItem("Uid")}`)
        console.log(res.data)
        setedit(res.data)
    }

    const getchage = (e) => {
        setedit({
            ...edit,
            [e.target.name]: e.target.value
        })
        console.log(edit)
    }

    const getsubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.put(`http://localhost:3000/users/${edit.id}`, edit);
            console.log(res.data)
            toast.success('profile updated..')
            localStorage.setItem("Uname",edit.name)
            redirect("/")
            setedit({
                id: "",
                name: "",
                email: "",
                status: "",
                password: ""
            })
        } catch (error) {
            console.log("Api data not Found", error)
        }
    }

    return (
        <div>
            <Header />
            <MDBContainer fluid>

                <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
                    <MDBCardBody>
                        <MDBRow>
                            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                                <form action="">
                                    <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Update profile</p>

                                    <div className="d-flex flex-row align-items-center mb-4 ">
                                        <MDBIcon fas icon="user me-3" size='lg' />
                                        <MDBInput value={edit.name} onChange={getchage} name='name' label='Your Name' id='form1' type='text' className='w-100' />
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <MDBIcon fas icon="envelope me-3" size='lg' />
                                        <MDBInput value={edit.email} onChange={getchage} label='Your Email' id='form2' name='email' type='email' />
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <MDBIcon fas icon="lock me-3" size='lg' />
                                        <MDBInput value={edit.password} onChange={getchage} label='Password' name='password' id='form3' type='password' />
                                    </div>


                                    <div className='mb-4'>
                                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                                    </div>

                                    <MDBBtn onClick={getsubmit} className='mb-4' size='lg'>Update data</MDBBtn>
                                </form>

                            </MDBCol>

                            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                                <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
                            </MDBCol>

                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>

            </MDBContainer>
        </div>
    )
}

export default EditProfile
