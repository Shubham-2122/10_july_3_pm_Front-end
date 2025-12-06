import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function NotFound() {

    const redirect = useNavigate()

    const getdata=()=>{
        redirect("/")
    }

  return (
    <div>
      <h1 className='bg-danger text-light p-5'>Hello this 404 Not Found Pages</h1>
      <Link to="/" className='btn btn-success'>Back to Home</Link>
      <button onClick={getdata} className='btn btn-info'>Back to Home</button>
    </div>
  )
}

export default NotFound
