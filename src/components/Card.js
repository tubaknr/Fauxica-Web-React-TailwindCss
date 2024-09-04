import React from "react";

export default function Card({imgSrc, title, itemName, price, marginX, marginY, topPercentage}){
    return(
        <div className="relative mr-10 m-10 overflow-hidden">
            <img src={imgSrc} alt="cloth" className="rounded-3xl w-80 object-cover"/>
            
            <div class="details" 
                className="absolute inset-0 flex items-center justify-center bg-opacity-80 rounded-2xl bg-white" 
                style={{top: `${topPercentage}%`,
                    left: `${marginX}px`,
                    right: `${marginX}px`,
                    bottom: `${marginY}px`,

            }}>
                
                <div className="texts">
                    <p className="font-bold text-black text-sm">{title}</p>
                    <p className="text-sm text-gray-600 pt-2">{itemName}</p>
                </div>

                <div class="right" className="flex items-center pl-5">
                    <p className="text-sm">{price}</p>
                </div>
            
            
            </div>
        </div>
    );
}
