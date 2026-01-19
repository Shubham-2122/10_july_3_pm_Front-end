import React from 'react'
import Home from './Compoenet/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Compoenet/Header'
import NewData from './Compoenet/NewData'
import Product from './Compoenet/Product'
import EditData from './Compoenet/EditData'

function App() {
  return (
    <BrowserRouter>
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/newdata' element={<NewData />} />
        <Route path='/product' element={<Product />} />
        <Route path='/edit/:id' element={<EditData />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
