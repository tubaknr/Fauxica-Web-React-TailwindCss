import React, {useState, useEffect} from "react";
import Sun from "../images/sun.png";
import Moon from "../images/moon.png";
import logo from "/home/tuba/Desktop/fauxica-react/fauxica-web/src/images/logo.svg";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


export default function Header(){
    const [isDarkMode, setIsDarkMode] = useState(()=>{
        const savedTheme = localStorage.getItem("selectedTheme");
        return savedTheme === "dark";
    });

    useEffect(()=>{
        document.querySelector("body").setAttribute("data-theme", isDarkMode ? "dark" : "light");
        localStorage.setItem('selectedTheme', isDarkMode ? "dark" : "light");
    },
    [isDarkMode]);
    
    const toggleTheme = (e) => {
        setIsDarkMode(prevMode => !prevMode);
    }

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
                    <li>
                        <button className="bg-none border-0 w-20 mt-[-20px] p-2 cursor-pointer"
                            onClick={toggleTheme} >
                            <img src={isDarkMode ? Sun : Moon}/>
                        </button>
                    </li>
                </ul>
            </div>
            <div>
                

            </div>
        </header>
    );
}
