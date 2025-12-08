import React from 'react'
import Header from '../Coman/Header'
import Footer from '../Coman/Footer'
import { Link, Outlet } from 'react-router-dom'

function About() {
  return (
    <div>
      <Header />
      <h1 className='bg-info p-5'>Hello this About Pages here</h1>

      <Link to="/about/about1" className='btn btn-primary mx-2'>About1</Link>
      <Link to="/about/about2" className='btn btn-primary'>About2</Link>
      <Outlet />
      <Footer />
    </div>
  )
}

export default About
