import React, { useEffect } from 'react'
import Home from './website/Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './website/Pages/About';
import Not from './website/Pages/Not';
import Amenities from './website/Pages/Amenities';
import Book from './website/Pages/Book';
import Contact from './website/Pages/Contact';
import Location from './website/Pages/Location';
import Offers from './website/Pages/Offers';
import Room from './website/Pages/Room';
import Restaurant from './website/Pages/Restaurant';
import Dashboard from './admin/Apages/Dashboard';
import RoomManege from './admin/Apages/RoomManege';
import RoomAdd from './admin/Apages/RoomAdd';
import AminitesMan from './admin/Apages/AminitesMan';
import AmitiAdd from './admin/Apages/AmitiAdd';
import Alogin from './admin/Apages/Alogin';
// import '/b/ootstrap/dist/css/bootstrap.min.css'
// import './assets/css/main.css'
import {  ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  useEffect(() => {
    if (window.AOS) {
      window.AOS.init();
    }
  }, []);


  return (
    <BrowserRouter>
        <ToastContainer position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored" />
      <div>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/ame' element={<Amenities />} />
          <Route path='/book' element={<Book />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/location' element={<Location />} />
          <Route path='/offer' element={<Offers />} />
          <Route path='/room' element={<Room />} />
          <Route path='/rest' element={<Restaurant />} />


          <Route path='*' element={<Not />} />

          {/* admin */}

          <Route path='/dash' element={<Dashboard />} />
          <Route path='/roommage' element={<RoomManege />} />
          <Route path='/roomadd' element={<RoomAdd />} />

          <Route path='/amitimange' element={<AminitesMan />} />
          <Route path='/amitiAdd' element={<AmitiAdd />} />
          <Route path='/alogin' element={<Alogin />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
