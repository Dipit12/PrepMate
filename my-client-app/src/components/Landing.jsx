import React from "react"
import Hero from "./Hero"
import Feature from "./Feature"
import bgpic from "../assets/bgFeature.png"
import youtube from "../assets/utube.png"
import flash from "../assets/flash-cards.png"
import AboutUs from "./AboutUs"

const Landing = ({isDashboard})=>{

    return(
        <>
           <Hero text = "Sign Up" isDashboard = {isDashboard} />
            <section>
                <AboutUs />
            </section>
            <section className = "Features  m-0">           
                <div className = " relative top-[0px] w-full h-screen bg-cover bg-center" style = {{backgroundImage:`url(${bgpic})`}}>
                    <div className = "flex justify-end m-10 mr-20">
                        <h1 className=" p-10 font-Oxygen text-9xl font-[700] uppercase tracking-wide text-[rgba(190,178,255,0.7)]">FEATURES</h1>
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