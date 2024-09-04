import React from "react";
import { Routes, Route} from "react-router-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import Contact from "./pages/Contact";

export default function App(){
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

