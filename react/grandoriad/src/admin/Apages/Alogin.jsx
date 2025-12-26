import React, { useEffect, useState } from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';

function Alogin() {

  const redirect = useNavigate()

  useEffect(() => {
    if (localStorage.getItem("Aid")) {
      redirect("/dash")
    }
  }, [])

  const [form, setform] = useState({
    email: "",
    password: ""
  })

  const getChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value
    })
    console.log(form)
  }

  const subniteddata = async (e) => {
    e.preventDefault()

    try {

      const { email, password } = form

      if (email == "" || password == "") {
        console.log("pls require data..")
         toast.error('Please enter email and password');
        return;
      }

      const res = await axios.get(`http://localhost:3000/admin?email=${email}`)
      console.log(res.data)

      if (res.data.length === 0) {
        console.log("Email does not match..!")
        toast.error('Email does not match..!')
        return false;
      }

      const admin = res.data[0]
      console.log(admin)

      if (admin.password != password) {
        console.log("Password does not match..!")
        toast.error('Password does not match..!')
        return false
      }

      localStorage.setItem("Aid", admin.id)
      localStorage.setItem("Aname", admin.name)
      console.log("succefully login..")
      toast.success('Successfully login.')
      redirect("/dash")

    } catch (error) {
      console.log("Api data not Found,..", error)
    }
  }

  return (
    <div>
      <MDBContainer fluid>

        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>

            <form action="" onSubmit={subniteddata}>
              <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                <MDBCardBody className='p-5 w-100 d-flex flex-column'>

                  <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                  <p className="text-white-50 mb-3">Please enter your login and password!</p>

                  <MDBInput value={form.email} onChange={getChange} name='email' wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='email' size="lg" />
                  <MDBInput value={form.password} onChange={getChange} name='password' wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg" />

                  <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />

                  <MDBBtn  size='lg' type='submit'>
                    Login
                  </MDBBtn>

                </MDBCardBody>
              </MDBCard>
            </form>

          </MDBCol>
        </MDBRow>

      </MDBContainer>
    </div>
  )
}

export default Alogin
