import React from "react";
import PMlogo from "../assets/PMLogo.svg"
import component from "../assets/Component 1.png"
const YoutubeSummarizer = () => {
    return(
        <>
            <div className = " flex justify-center items-center w-full h-screen bg-cover bg-center" style = {{backgroundImage:`url(${component})`}}>
                        <div className="flex w-[1304px] h-[794px] bg-[rgba(0, 0, 0, 0.15)] rounded-[32px]">
                            <div className="Logo w-[326px] h-[97px] relative">
                                <div className="absolute top-80 left-30 w-[600px]">
                                    <img src={PMlogo} className="w-[400px]" alt="PM Logo" />
                                </div>
                            </div>
                            <div className="user-input absolute top-20 right-55">
                                <h1 className="text-white font-poppins text-5xl font-[700]">Youtube Summarizer</h1>
                                <h3 className="text-white font-poppins text-2xl font-[600] mt-5">Upload the youtube video link below</h3>
                            </div>
                        </div>
            </div>
        </>
    )
}

export default YoutubeSummarizer

