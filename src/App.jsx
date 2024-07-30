import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home-component'
function App() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/*<Route path="/about" component={About} />*/}
      </Routes>
    </>
  )
}

export default App
