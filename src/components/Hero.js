import React from "react";
import Card from "./Card";
import left from "/home/tuba/Desktop/fauxica-react/fauxica-web/src/images/clothing1.jpg";
import rightTop from "/home/tuba/Desktop/fauxica-react/fauxica-web/src/images/clothing2.jpg";
import rightBottom from "/home/tuba/Desktop/fauxica-react/fauxica-web/src/images/clothing3.jpg";
import confetti from "/home/tuba/Desktop/fauxica-react/fauxica-web/src/images/confetti.svg";

export default function Hero(){
    return(
        <div className="flex justify-between mx-20 font-Inter">
            <div class="left-hero" className="text-black  m-20 pt-10 w-1/2" >
                <h1 className="text-5xl font-bold pb-12">Quality apparel without the price tag</h1>
                <p className="pb-5 ">No need to spend $xxx on apparel just for the name's sake. Our premium apparel is made from the same stuff.</p>
                
                <div class="btns" className="flex">
                    <button className="text-black py-4 px-8 rounded-3xl bg-customYellow font-bold ml-5 mr-5">Browse our collection</button>
                    
                    <a href="#" className="flex justify-between ml-10 pt-4 font-bold custom-slide">Spring '24 Collection
                        <span className="ml-3 mt-2">
                            <svg width="19" height="9" viewBox="0 0 19 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.3536 4.85355C18.5488 4.65829 18.5488 4.34171 18.3536 4.14645L15.1716 0.964466C14.9763 0.769204 14.6597 0.769204 14.4645 0.964466C14.2692 1.15973 14.2692 1.47631 14.4645 1.67157L17.2929 4.5L14.4645 7.32843C14.2692 7.52369 14.2692 7.84027 14.4645 8.03553C14.6597 8.2308 14.9763 8.2308 15.1716 8.03553L18.3536 4.85355ZM0 5H18V4H0V5Z" fill="black"/>
                            </svg>
                        </span>
                    </a>

                </div>
                <div class="text" className="relative flex justify-between mt-10 px-12 py-10 border-2 border-black mr-30 rounded-xl">
                    <p className="text-3xl">50K</p>
                    <p className="pl-12">We’re proud to announce that we now employ a workforce of over 50,000. It’s all possible because of you.</p>
                    <img src={confetti} className="absolute top-[-.5cm] left-[-.5cm]"/>
                </div>
            </div>

            <div class="right-hero" className="flex mr-20 ml-10">
                <Card imgSrc={left} title="Fauxica Sports" itemName="Cardigans" price="$156" topPercentage="65" marginX="40" marginY="50" ticketImg='true'/>
                
                <div>
                    <Card imgSrc={rightTop} title="Fauxica Gentle" itemName="T-shirts" price="$90" topPercentage="55" marginX="40" marginY="10" ticketImg='false'/>
                    <Card imgSrc={rightBottom} title="Fauxica Casual" itemName="Sport shoes" price="$120"  topPercentage="55" marginX="40" marginY="10" ticketImg='false'/>
                </div>
            </div>
        </div>
    );
}

