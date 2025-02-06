import React from 'react';
import mailIcon from "../assets/mail_icon.png";
import lockIcon from "../assets/Lock.png";
import PMlogo from "../assets/PMLogo.svg";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div className=' w-[1300px] h-[650px] bg-[#1E1E1E] ml-30 my-20 rounded-3xl flex'>
      <div className = "absolute top-80 left-50 w-[600px]">
            <img src = {PMlogo} className = "w-[400px]"></img>
          </div>
      <div className='w-[650px] h-[650px]  font-poppins font-weight-[700] text-9xl my-50 mx-7 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-white'>
        
      </div>
      <div className='w-[750px] h-[650px] text-white my-10 mx-30 '>
        <h1 className=' text-6xl font-poppins font-[600]'>Hello! <br/>Welcome Back...</h1>
        <div className='my-15 relative'>
          <input type="text" placeholder='Your Email Address' className='p-2 border-b-2 w-120 border-gray-600 placeholder-white focus:outline-none' />
          <img src = {mailIcon} className = " w-[39px] h-[40px] absolute right-20 bottom-2"alt = "user-icon"></img>
        </div>
        <div className='my-15'>
          <input type="password" placeholder='Your Password' className='p-2 border-b-2 w-120 border-gray-600 placeholder-white focus:outline-none'/>
          <img src = {lockIcon} className = " w-[39px] h-[40px] absolute right-73 top-99"alt = "user-icon"></img>
        </div>
        <div className='my-10'>
          <button className='bg-[#0086FF] px-55 py-2 rounded-lg cursor-pointer hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'>Login </button>
        </div>
        <div className='my-5 mx-30 flex'>
          <p>Don't have an account?</p> <button className='mx-1 text-[#0086FF] font-weight-700'><span className = "ml-1"><Link to = "/register" className = "text-[rgba(0,134,255,1)] font-[700] text-xl hover:underline">Sign up</Link></span></button>
        </div>
        <div className='my-6 mx-33 flex'>
          <p>Forgot your password?</p> <button className='mx-1 text-[#0086FF] font-weight-900'><span className = "ml-1"><Link to = "/reset" className = "text-[rgba(0,134,255,1)] font-[700] text-xl hover:underline">Reset</Link></span></button>
        </div>
      </div>
    </div>
    
    
    </>

  );
};

export default Login;
