
import React from 'react'
import Login from './components/Login' 
import Registeration from './components/Registration'
import { Routes, Route} from 'react-router-dom'
import Landing from './components/Landing'
import Footer from './components/footer'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path = "/register" element = {< Registeration/>} />
        <Route path = "/login" element = {< Login/>} />
        <Route path = "/" element = {<Landing />} />
      </Routes>

      <Footer />
    </div>
    
  )
}

export default App

