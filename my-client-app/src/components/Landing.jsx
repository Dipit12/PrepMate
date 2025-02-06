import component from "../assets/Component 1.png"
import React from "react"
import { motion } from "framer-motion"
import Navbar from "./Navbar"
import bulb from "../assets/Group.svg"
import world from "../assets/World.svg"
import reactpic from "../assets/reactPic.svg"
import airplane from "../assets/airplane.svg"
import Feature from "./Feature"
import bgpic from "../assets/bgFeature.png"
import youtube from "../assets/utube.png"
import flash from "../assets/flash-cards.png"
import AboutUs from "./AboutUs"
const Landing = ()=>{

    return(
        <>
            <section className = " Hero w-full h-screen bg-cover bg-center pt-0 pb-0" style = {{backgroundImage:`url(${component})`}}>
                <Navbar />
                <div className = " flex flex-col justify-center items-center w-full mt-40  ">
                    <div className = "ml-18">
                        <h1 className = "font-oxygen text-6xl font-[800] uppercase tracking-widest text-[rgba(255,255,255,0.7)]">Introducing</h1>
                    </div>
                    
                    <div className = "mt-6 ml-17">
                        <motion.h1
                            initial={{ y:"100vh",opacity:0}}

                            animate={{ y:0,opacity:1}}
                            transition={{ duration: 2 }}
                            >
                            <h1 className = "font-oxygen text-9xl font-[900] uppercase tracking-widest text-[rgb(255,255,255)]">PrepMate</h1>
                        </motion.h1>
                    </div>
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

            <section>
                <AboutUs />
            </section>

            <section className = "Features  m-0">
                
            
                <div className = " relative top-[0px] w-full h-screen bg-cover bg-center" style = {{backgroundImage:`url(${bgpic})`}}>

                    <div className = "flex justify-end m-10 mr-20">
                        <h1 className="font-oxygen text-6xl font-[800] uppercase tracking-wide text-[rgba(255,255,255,0.7)] m-0">FEATURES</h1>
                    </div>
                    
                    <div className = "flex m-50">
                        <Feature title = "Youtube Summariser" image = {youtube}></Feature>
                        <Feature title = "Flash Cards" image = {flash}></Feature>
                        
                    </div>
                    
                </div>
            </section>
                          
        </>
    )


}

export default Landing