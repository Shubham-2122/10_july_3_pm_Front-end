import React from 'react'
import Home from './Compoenet/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Compoenet/Header'
import NewData from './Compoenet/NewData'

function App() {
  return (
    <BrowserRouter>
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/newdata' element={<NewData />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
