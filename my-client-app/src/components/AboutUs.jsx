import React from 'react';
import Desktop from '../assets/Desktop.png'
import OBJECTS from '../assets/OBJECTS.png'

const AboutUs = () => {
  return (
   <div className='flex' style = {{
        height: '810px',
        width: '1400px',
        backgroundImage: `url(${Desktop})`
   }}>
        <div className='w-[900px] h-[600px] '>
            <div className=' text-9xl font-poppins font-[600] text-fuchsia-100 opacity-40 mx-20 mt-40 '>
                ABOUT US
            </div>
            <div className=' mx-20 my-20 text-2xl font-[100] text-fuchsia-100 opacity-70'>
            PrepMate, created by four VIT University CSE students, is a platform designed to help university students succeed.  We offer quizzes based on uploaded materials and YouTube videos, along with concise video summaries, and more. Our team consists of two frontend developers, a backend developer, and a designer, all working together to make studying easier and more effective.
            </div>
        </div>

        <div>
            <img src = {OBJECTS} className='w-[650px] h-[350px] my-50'></img>
        </div>
   </div>
  );
};

export default AboutUs;
