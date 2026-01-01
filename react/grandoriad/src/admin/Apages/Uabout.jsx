import React, { useState } from 'react'
import Aheader from '../Acoman/Aheader'
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
import axios from 'axios';


function Uabout() {
    const [form, setform] = useState({
        id: "",
        name: "",
        email: "",
        password: ""
    })
    const getchage = (e) => {
        setform({
            ...form,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
    }
    const SubmitData = async (e) => {
        e.preventDefault()
        try {
            const {name,email,password}=form
            if(name==""||email=="",password==""){
                console.log("Fill data")
                return false;
            }
            const res = await axios.post(`http://localhost:3000/users`, form)
            console.log(res.data)
            setform({
                name: "",
                email: "",
                password: ""
            })

        } catch (error) {
            console.log("Api Not Found", error);

        }
    }
    return (
        <div>
            <Aheader />
            <div className="container"> <MDBContainer fluid>

                <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
                    <form action="" onSubmit={SubmitData}>
                        <MDBCardBody>
                            <MDBRow>
                                <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                                    <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                    <div className="d-flex flex-row align-items-center mb-4 ">
                                        <MDBIcon fas icon="user me-3" size='lg' />
                                        <MDBInput label='Your Name' value={form.name} onChange={getchage} name='name' id='form1' type='text' className='w-100' />
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <MDBIcon fas icon="envelope me-3" size='lg' />
                                        <MDBInput label='Your Email' value={form.email} onChange={getchage} name='email' id='form2' type='email' />
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <MDBIcon fas icon="lock me-3" size='lg' />
                                        <MDBInput label='Password' value={form.password} onChange={getchage} name='password' id='form3' type='password' />
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

            </MDBContainer></div>
        </div>
    )
}

export default Uabout
