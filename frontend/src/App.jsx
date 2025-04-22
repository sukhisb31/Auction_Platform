import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/home/Home'
import SideDrawer from './components/layout/SideDrawer'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <SideDrawer/>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
