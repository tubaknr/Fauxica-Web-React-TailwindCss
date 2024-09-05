import React from "react";
import ticketsvg from "/home/tuba/Desktop/fauxica-react/fauxica-web/src/images/tag.svg";

export default function Card({imgSrc, title, itemName, price, marginX, marginY, topPercentage, ticketImg}){
    return(
        <div className="relative mr-10 m-10 font-Inter">
            <img src={imgSrc} alt="cloth" className="relative inset-0 rounded-3xl w-80 object-cover"/>
            
            {ticketImg === "true" && <img src={ticketsvg} className="absolute inset-0 top-0 left-[-2cm] no-repeat w-48 h-25"/>}

            <div class="details" 
                className="absolute inset-0 flex items-center justify-center bg-opacity-80 rounded-2xl bg-white dark:bg-black" 
                style={{top: `${topPercentage}%`,
                    left: `${marginX}px`,
                    right: `${marginX}px`,
                    bottom: `${marginY}px`,

            }}>
                
                <div className="texts">
                    <p className="font-bold text-black text-sm dark:text-slate-300">{title}</p>
                    <p className="text-sm text-gray-600 pt-2 dark:text-slate-300">{itemName}</p>
                </div>

                <div class="right" className="flex items-center pl-5">
                    <p className="font-bold text-lg dark:text-slate-300">{price}</p>
                </div>
            
            
            </div>
        </div>
    );
}
