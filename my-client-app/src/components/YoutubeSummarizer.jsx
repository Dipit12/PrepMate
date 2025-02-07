import React, { useState }from "react";
import PMlogo from "../assets/PMLogo.svg"
import {useNavigate} from "react-router-dom"
import Arrow_right from "../assets/Arrow_right.svg";
const YoutubeSummarizer = () => {
    const[videoUrl,setVideoUrl] = useState('');
    const navigate = useNavigate();
    const goBack = () => {
        navigate("/dashboard");
    }
    return(
        <>
            <div className="flex justify-center items-center h-screen">
                        <div className="flex w-[1304px] h-[794px] bg-[rgba(254,255,255,0.14)] rounded-[32px]">
                            <div className="Logo w-[326px] h-[97px] relative">
                                <div className="absolute top-80 left-30 w-[600px]">
                                    <img src={PMlogo} className="w-[400px]" alt="PM Logo" />
                                </div>
                            </div>
                            <div className="user-input absolute top-30 right-62">
                                <h1 className="text-white font-poppins text-5xl font-[700]">Youtube Summarizer</h1>
                                <h3 className="text-white font-poppins text-2xl font-[600] mt-5">Upload the youtube video link below...</h3>
                            </div>

                            <form>
                                <input 
                                type = "url"
                                value = {videoUrl}
                                onChange = {(e)=>setVideoUrl(e.target.value)}
                                placeholder = "Enter Youtube Video URL"
                                className = "mt-90 ml-100 p-2 rounded-md border-b-1 w-[500px] placeholder-white text-white focus:outline-none"
                                />

                                    <button type="submit" className="mt-13 ml-95 w-[500px] h-[40px] bg-[rgba(0,134,255,1)] rounded-xl text-white text-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    Upload
                                    </button>
                            </form>
                        </div>

                        <button onClick = {goBack}>
                                <img src = {Arrow_right} className = " cursor-pointer w-[55px] h-[auto] absolute top-15 left-35" alt="Back Arrow"></img>
                        </button>
            </div>
        </>
    )
}

export default YoutubeSummarizer