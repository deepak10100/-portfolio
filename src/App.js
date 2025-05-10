import React from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import TackStack from './components/TackStack.jsx'
import Footer from './components/Footer.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
function App() {
  return (
    <>
     <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about-me" element={<About/>}></Route>
      <Route path="/contact-us" element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
      
    </>
  )
}

export default App
