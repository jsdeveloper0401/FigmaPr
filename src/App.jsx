import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import HeroSection from "./components/hero/HeroSection";
import RecentPosts from "./components/recentPost/RecentPosts";
import FeaturedWorks from "./components/feature/FeaturedWorks";
import Footer from "./components/footer/Footer";
import Work from "./components/navbar/work";
import Blog from "./components/navbar/blog";
import Contact from "./components/navbar/contact";

import Pretty from "./assets/pretty.png";
import Malaya from "./assets/malaya.png";
import Logo from "./assets/logo.png";

const works = [
    {
        imgSrc: Pretty,
        altText: "Design dashboard",
        title: "Designing Dashboards",
        year: "2020",
        type: "Dashboard",
        description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
        imgSrc: Malaya,
        altText: "Vibrant Portraits of 2020",
        title: "Vibrant Portraits of 2020",
        year: "2018",
        type: "Illustration",
        description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
        imgSrc: Logo,
        altText: "36 Days of Malayalam type",
        title: "36 Days of Malayalam type",
        year: "2018",
        type: "Typography",
        description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
];

const App = () => {
    const [count, setCount] = useState(false);
    const location = useLocation();

    return (
        <>
            <Header count={count} setCount={setCount} />
            <Routes>
                <Route path="/work" element={<Work />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            {location.pathname === "/" && (
                <main>
                    <HeroSection />
                    <RecentPosts />
                    <FeaturedWorks works={works} />
                </main>
            )}
            <Footer />
        </>
    );
};

export default App;
