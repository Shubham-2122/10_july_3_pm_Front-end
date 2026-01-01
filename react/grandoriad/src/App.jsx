import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Website pages
import Home from './website/Pages/Home'
import About from './website/Pages/About'
import Not from './website/Pages/Not'
import Amenities from './website/Pages/Amenities'
import Book from './website/Pages/Book'
import Contact from './website/Pages/Contact'
import Location from './website/Pages/Location'
import Offers from './website/Pages/Offers'
import Room from './website/Pages/Room'
import Restaurant from './website/Pages/Restaurant'

// Admin pages
import Dashboard from './admin/Apages/Dashboard'
import RoomManege from './admin/Apages/RoomManege'
import RoomAdd from './admin/Apages/RoomAdd'
import AminitesMan from './admin/Apages/AminitesMan'
import AmitiAdd from './admin/Apages/AmitiAdd'
import Alogin from './admin/Apages/Alogin'

// Toastify
import { Bounce, Slide, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Login from './website/Pages/Login'
import Register from './website/Pages/Register'
import EditProfile from './website/Pages/EditProfile'
import UserGet from './admin/Apages/UserGet'
import Uabout from './admin/Apages/Uabout'

// Optional: AOS CSS (if using)
// import 'aos/dist/aos.css'

function App() {

  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
  }, [])

  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        toastClassName="p-0 m-0"
        bodyClassName="p-2"
        containerClassName="toast-container-overlay"
        transition={Bounce}
      />



      <Routes>
        {/* Website pages */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/ame' element={<Amenities />} />
        <Route path='/book' element={<Book />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/location' element={<Location />} />
        <Route path='/offer' element={<Offers />} />
        <Route path='/room' element={<Room />} />
        <Route path='/rest' element={<Restaurant />} />
         <Route path='/login' element={<Login />} />
          <Route path='/newdata' element={<Register />} />
          <Route path='/edit' element={<EditProfile />} />

        {/* Admin pages */}
        <Route path='/dash' element={<Dashboard />} />
        <Route path='/roommage' element={<RoomManege />} />
        <Route path='/roomadd' element={<RoomAdd />} />
        <Route path='/amitimange' element={<AminitesMan />} />
        <Route path='/amitiAdd' element={<AmitiAdd />} />
        <Route path='/alogin' element={<Alogin />} />
        <Route path='/auserapi' element={<UserGet />} />
        <Route path='/uabout' element={<Uabout />} />

        {/* Catch-all */}
        <Route path='*' element={<Not />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
