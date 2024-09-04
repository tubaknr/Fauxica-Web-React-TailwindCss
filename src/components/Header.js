import React from "react";
import logo from "/home/tuba/Desktop/fauxica-react/fauxica-web/src/images/logo.svg";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


export default function Header(){
    return(
        <header className="flex justify-between m-20 mr-30 font-Inter">
            <div class="logo" className="mx-20 ml-20">
                <a href="#" >
                    <img src={logo} className="w-40"/>
                </a>
            </div>
            <div className="menu">
                <ul className="flex justify-between mr-40 space-x-40 mt-5">
                    <li><Link to="/home" className="text-lg tracking-widest uppercase current-page">Home</Link></li>
                    <li><a href="#" className="text-lg tracking-widest uppercase custom-underline">Products</a></li>
                    <li><a href="#" className="text-lg tracking-widest uppercase custom-underline">Gallery</a></li>
                    <li><Link to="/contact" className="text-lg tracking-widest uppercase custom-underline">Contact</Link></li>
                </ul>
            </div>
            <div>
                

            </div>
        </header>
    );
}
