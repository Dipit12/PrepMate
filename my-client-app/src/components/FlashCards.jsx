import React from "react";
import component from "../assets/Component 1.png"
import Card from "./Card"
const FlashCards = ()=>{
    return (
        <>
             <section className = " Hero w-full h-screen bg-cover bg-center pt-0 pb-0" style = {{backgroundImage:`url(${component})`}}>

                <Card title = "Theory of Computation"/>
             </section>
        </>
    )
}

export default FlashCards