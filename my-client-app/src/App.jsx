
import React from 'react'
import Login from './components/Login' 
import Registeration from './components/Registration'
import { Routes, Route, Link } from 'react-router-dom'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path = "/register" element = {< Registeration/>} />
        <Route path = "/login" element = {< Login/>} />
        <Route path = "/about" element = {<AboutUs/>} />
        <Route path = "/footer" element = {<Footer/>} />
      </Routes>
    </div>
  )
}

export default App

