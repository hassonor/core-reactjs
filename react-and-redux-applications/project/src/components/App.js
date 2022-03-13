import React from "react";
import {Routes, Route} from "react-router-dom"
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Page404 from "./Page404";
import CoursesPage from "./courses/CoursesPage";
import ManageCoursePage from "./courses/ManageCoursePage"; // eslint-disable-line import/no-named-as-default
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function App() {
    return (
        <>
            <div className="container-fluid">
                <Header/>
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/courses" element={<CoursesPage/>}/>
                        <Route path="/course/:slug" element={<ManageCoursePage/>}/>
                        <Route path="/course" element={<ManageCoursePage/>}/>
                        <Route path="/about" element={<AboutPage/>}/>
                        <Route path="*" element={<Page404/>}/>
                    </Routes>
                </main>
                <ToastContainer autoClose={2000} hideProgressBar/>
            </div>
            <Footer/>
        </>
    );
}
