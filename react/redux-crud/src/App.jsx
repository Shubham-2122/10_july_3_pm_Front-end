import React from 'react'
import Home from './Compoenet/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Compoenet/Header'
import NewData from './Compoenet/NewData'
import Product from './Compoenet/Product'

function App() {
  return (
    <BrowserRouter>
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/newdata' element={<NewData />} />
        <Route path='/product' element={<Product />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
