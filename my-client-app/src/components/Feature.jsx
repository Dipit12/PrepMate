import React from "react";

const Feature = ({title,image}) => {
    return (
        <>
                <div className="flex flex-col items-center ml-20 p-7 w-[300px] h-[200px] bg-[rgba(255,255,255,0.1)] rounded-xl">
                    <img src={image} alt="Image" className="w-[70px] h-[70px]" />
                        <div className="mt-4 text-white text-2xl">
                            <p>{title}</p>
                        </div>
                </div>
        </>
    );
};

export default Feature;
