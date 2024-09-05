import React, {useState, useEffect} from "react";
import Sun from "../images/sun.png";
import Moon from "../images/moon.png";
import logo from "/home/tuba/Desktop/fauxica-react/fauxica-web/src/images/logo.svg";
import { Link , useLocation} from 'react-router-dom';


export default function Header(){

   const [theme, setTheme] = useState(() => {
    
    const savedTheme = localStorage.getItem("theme");
    
    if (savedTheme){
        return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
  
});

    useEffect(() => {
        if(theme === "dark"){
            document.documentElement.classList.add("dark");
        }else{
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);


   const handleThemeSwitch = () => {
    setTheme(prevTheme => (prevTheme === "dark" ? "light" : "dark"));
   };

   const location = useLocation();

    return(
        <header className="flex justify-between p-4 m-20 mr-30 font-Inter dark:darkBg">
            <div className="menu ">
                <ul className="flex justify-between mr-40 space-x-40 mt-5">
                    <li className="mr-40">
                        <a href="#" >
                            <img src={logo} className="ml-20 mx-20 h-auto dark:text-white"/>
                        </a>
                    </li>
                    <li><Link to="/home" className={`text-lg tracking-widest uppercase dark:text-white ${location.pathname === "/home" ? "current-page" : ""}`}>Home</Link></li>
                    <li><a href="#" className={`text-lg tracking-widest uppercase custom-underline dark:text-white ${location.pathname === "/products" ? "current-page" : ""}`}>Products</a></li>
                    <li><a href="#" className={`text-lg tracking-widest uppercase custom-underline dark:text-white ${location.pathname === "/gallery" ? "current-page" : ""}`}>Gallery</a></li>
                    <li><Link to="/contact" className={`text-lg tracking-widest uppercase custom-underline dark:text-white ${location.pathname === "/contact" ? "current-page" : ""}`}>Contact</Link></li>
                    <li>
                        <button className="bg-none border-0 w-20 mt-[-20px] p-2 cursor-pointer"
                            onClick={handleThemeSwitch} >
                            <img src={theme === "dark" ? Sun : Moon}/>
                        </button>
                    </li>
                </ul>
        
        <div className="border-t opacity-15 mt-10 border-black w-full dark:white"></div>
        
            </div>
            <div>
                

            </div>
        </header>
    );
}
