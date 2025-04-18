import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SideDrawer from "./layout/SideDrawer";
import Home from './pages/Home.jsx';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <>
       <BrowserRouter>
       <SideDrawer/>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
        <ToastContainer position="top-right" />
       </BrowserRouter>
    </>
  )
}

export default App
