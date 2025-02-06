import React from "react";
import { Link,useNavigate } from "react-router-dom";
import logo from "../assets/logo1.svg";
const Navbar = ()=>{
    const navigate = useNavigate();
    const signUp = () => {
      navigate("/register");
    }
    return (
        <>
            <nav className = "nav sticky w-full h-25 bg-black ">
                        <div className = "flex justify-between relative">
                            <Link to = "/"><img src = {logo} alt = "logo" className = "p-3 w-[155px] cursor-pointer" style={{ position: "absolute", top: "25px", left: "52px" }}></img></Link>
                            <button
                                className="rounded-2xl relative top-[45px] right-[45px] w-[120px] h-[30px] text-poppins text-white cursor-pointer hover:from-black hover:to-[#7199FF]"
                                style={{
                                    background: "linear-gradient(to right, rgba(113,153,255,1), rgba(37,70,153,1))",
                                }}
                                onClick = {signUp}
                            >
                            Sign Up
                            </button>
                        </div>
            </nav>
        </>
    )
    
}

export default Navbar