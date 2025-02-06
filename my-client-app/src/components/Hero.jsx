import React from "react";
import { motion } from "framer-motion"
import Navbar from "./Navbar"
import bulb from "../assets/Group.svg"
import world from "../assets/World.svg"
import reactpic from "../assets/reactPic.svg"
import airplane from "../assets/airplane.svg"
import component from "../assets/Component 1.png"
import title from "../assets/title.svg"
const Hero = ({ isDashboard,text }) =>{
    return (
        <>
        
        <section className = " Hero w-full h-screen bg-cover bg-center pt-0 pb-0" style = {{backgroundImage:`url(${component})`}}>
                <Navbar text = {text} isDashboard = {isDashboard}/>
                <div className = " flex flex-col justify-center items-center w-full mt-40  ">
                    <motion.img src = {title}
                        initial = {{ opacity:0}}
                        animate = {{opacity:1}}
                        transition = {{duration:4.5}}
                    ></motion.img>
                </div>
                <div className = "absolute top-[200px] left-[250px]">
                    <motion.img src = {bulb}       
                        initial={{ x: '-100vw' }} // Slide in from the left
                        animate={{ x: 0 }}
                        whileHover = {{scale:1.2}}
                        transition={{ type: 'spring', stiffness: 100 ,damping:12}} ></motion.img>
                </div>
                <div className = "absolute bottom-[100px] left-[250px]">
                    <motion.img 
                    src = {world}
                    initial = {{rotate:0}}
                    animate = {{rotate:360}}
                    whileHover = {{scale:1.2,rotate:10}}
                    transition = {{
                        type: 'spring',
                        duration:1.5,
                        stiffness: 100,
                        damping:20
                    }}
                    ></motion.img>
                </div>

                <div className = "absolute top-[160px] right-[230px]">
                    <motion.img 
                        src = {reactpic}
                        animate = {{
                            rotate:360,
                        }}
                        transition = {{
                            duration:2,
                            repeat:Infinity,
                            repeatType:"loop",
                        }}
                    />
                </div>

                
                <div className = "absolute bottom-[120px] right-[550px]">
                    <motion.img 
                        src = {airplane}
                        animate={{
                            x: [0, 100, 200],
                            y:[-100,-200,],
  
                          }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,

                            ease:"easeInOut"
                          }}
                    />
                </div>
            </section >
        
        
        </>
        
    )
}

export default Hero;