import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Singin from "./pages/Singin";
import ErrorPage404 from "./pages/ErrorPage";


const App=()=>{

    return (
        <>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/singin' element={<Singin/>}/>
                <Route path='/errorpage' element={<ErrorPage404/>}/>
                <Route path='*' element={<Navigate to={'/errorpage'}/>}/>
            </Routes>
        </>
    )
}

export default App;
