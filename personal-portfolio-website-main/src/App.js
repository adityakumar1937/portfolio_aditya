import React from "react";

import "./app.scss";


import Contact from "./components/contact";
import Footer from "./components/footer";
import Intro from "./components/intro";
import Portfolio from "./components/portfolio";
import Skills from "./components/skills";

const App = () => {
    return (
        <div>
            <Intro />
            <Skills />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
