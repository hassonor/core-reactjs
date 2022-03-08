import React from "react";
import {Routes, Route} from "react-router-dom"
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Page404 from "./Page404";
import CoursesPage from "./courses/CoursesPage";


export default function App() {
    return (
        <>
            <div className="container-fluid">
                <Header/>
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/courses" element={<CoursesPage/>}/>
                        <Route path="/about" element={<AboutPage/>}/>
                        <Route path="*" element={<Page404/>}/>
                    </Routes>
                </main>
            </div>
            <Footer/>
        </>
    );
}
