import React from "react";

export default function Header(){
    return(
        <header className="flex justify-between m-20 mr-30">
            <div class="logo" className="mx-20 ml-20">
                <a href="#" >
                    <img src="images/logo.svg" className="w-40"/>
                </a>
            </div>
            <div className="menu">
                <ul className="text-4xl">
                    <li><a href="#" className="active">Home</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </header>
    );
}
