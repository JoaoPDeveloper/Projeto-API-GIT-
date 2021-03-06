import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Repositories from "./pages/Repositories";
import Home from './pages/home';

export default function RoutesApp(){
    return( 
        <BrowserRouter>
            <Routes>
             <Route path="/" element={<Home/>} />
             <Route path="/repositories" element={<Repositories/>} />
            </Routes>
        </BrowserRouter>
    )
}