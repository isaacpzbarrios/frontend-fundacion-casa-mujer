import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home-component'
import About from './components/about-component'
import Help from './components/help-component'
import Exhibition from './components/exhibition-component'
import Donate from './components/donate-component'
import Volunteer from './components/volunteer-component'
function App() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/help" element={<Help/>} />
        <Route path="/exhibition" element={<Exhibition/>} />
        <Route path="/collaborate/donate" element={<Donate/>} />
        <Route path="/collaborate/volunteer" element={<Volunteer/>} />
      </Routes>
    </>
  )
}

export default App
