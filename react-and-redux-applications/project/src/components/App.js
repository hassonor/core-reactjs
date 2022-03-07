import React from "react";
import {Routes, Route} from "react-router-dom"
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";


export default function App() {
    return (
        <>
            <div className="container-fluid">
                <Header/>
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/about" element={<AboutPage/>}/>
                    </Routes>
                </main>
            </div>
        </>
    );
}
