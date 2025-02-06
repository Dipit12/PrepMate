import React from "react";
const Card = ({title}) =>{
    return (
        <>
           <div
                className="w-[300px] h-[400px] rounded-2xl"
                style={{
                backgroundImage: 'linear-gradient(to top left, rgba(20, 138, 40, 0.61) 60%, rgba(69, 174, 86, 0.61) 80%, rgba(114, 210, 122, 0.86))',
                boxShadow: '0 0 20px rgba(5, 71, 16, 0.8)', 
                }}

            >

                <h1>{title}</h1>
            </div>

        </>
    )


}

export default Card