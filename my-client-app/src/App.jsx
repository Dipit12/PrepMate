
import React from 'react'
import Login from './components/Login' 
import Registeration from './components/Registration'
import { Routes, Route, Link } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path = "/register" element = {< Registeration/>} />
        <Route path = "/login" element = {< Login/>} />
      </Routes>
    </div>
  )
}

export default App

