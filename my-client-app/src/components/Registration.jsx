import React from 'react'
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import userIcon from "../assets/user_icon.png";
import mailIcon from "../assets/mail_icon.png";
import lockIcon from "../assets/Lock.png";
import backArrow from "../assets/back.png";
import PMlogo from "../assets/PMLogo.svg";
const Registration = () => {
  
    const navigate = useNavigate();
    
    const goBack = () => {
      navigate("/");
    }
  
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex w-[1304px] h-[794px] bg-[rgba(254,255,255,0.14)] rounded-[32px]">
        <div className="Logo w-[326px] h-[97px] relative">
          <div className = "absolute top-80 left-30 w-[600px]">
            <img src = {PMlogo} className = "w-[400px]"></img>
          </div>
          

        </div>
        <div className="user-input absolute top-20 right-55">
          <h1 className="text-white font-poppins text-5xl font-[700]">Let's Get Started</h1>
          <h3 className="text-white font-poppins text-3xl font-[600] mt-2">Create an account</h3>
          <div className="input-fields mt-20">
            <form method = "POST">
              <input 
                type="text" 
                placeholder="Your username" 
                className="mt-5 p-2 rounded-md border-b-1 w-full placeholder-white text-white focus:outline-none"
                
              />
              <img src = {userIcon} className = " w-[39px] h-[40px] absolute right-5 bottom-82"alt = "user-icon"></img>
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="mt-20 p-2 rounded-md border-b-1 w-full placeholder-white text-white focus:outline-none"
              />
              <img src = {mailIcon} className = " w-[39px] h-[40px] absolute right-5 bottom-52"alt = "user-icon"></img>
              <input 
                type="password" 
                placeholder="Your Password" 
                className="mt-20 p-2 rounded-md border-b-1 w-full placeholder-white text-white focus:outline-none"
              />
              <img src = {lockIcon} className = " w-[39px] h-[40px] absolute right-5 bottom-22"alt = "user-icon"></img>
              <div>
              <button
                type="submit"
                className="mt-7 w-[600px] h-[51px] bg-[rgba(0,134,255,1)] rounded-xl text-white text-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Sign Up
              </button>

              </div>
            </form>

            <h2 className = "text-white font-poppins mt-7 absolute left-40">Already have an account? <span className = "ml-1"> <Link to = "/login" className = " text-[rgba(0,134,255,1)] font-[700] text-xl hover:underline"> Login</Link></span></h2>
          </div>

        </div>
      </div>
      <button onClick = {goBack}>
        <img src = {backArrow} className = " cursor-pointer w-[55px] h-[auto] absolute top-15 left-35"></img>
      </button>
    </div>
  )
}

export default Registration
