import React from "react";

export default function Header(){
    return(
        <header className="flex justify-between m-20 mr-30 font-Inter">
            <div class="logo" className="mx-20 ml-20">
                <a href="#" >
                    <img src="images/logo.svg" className="w-40"/>
                </a>
            </div>
            <div className="menu">
                <ul className="flex justify-between mr-40 space-x-40 mt-5">
                    <li><a href="#" className="text-lg tracking-widest uppercase current-page">Home</a></li>
                    <li><a href="#" className="text-lg tracking-widest uppercase custom-underline">Products</a></li>
                    <li><a href="#" className="text-lg tracking-widest uppercase custom-underline">Gallery</a></li>
                    <li><a href="#" className="text-lg tracking-widest uppercase custom-underline">Contact</a></li>
                </ul>
            </div>
        </header>
    );
}
