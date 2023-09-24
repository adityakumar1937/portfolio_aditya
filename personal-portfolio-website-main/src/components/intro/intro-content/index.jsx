import React from "react";
import man from "../../../images/man.png"
import hand from "../../../images/hand.png";
import CallToAction from "../../shared/CallToAction";
import { scrollToSection } from "../../utils/helpers";

import "./style.scss";

const IntroContent = () => {
    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col">
                    <h1 className="title">
                        <span className="small-text">
                            <span className="text">Hello</span>
                            <span className="icon">
                                <img src={hand} alt="hi"/>
                            </span>
                            <span className="text">, I Am</span>
                        </span>
                        <span className="big-text">Aditya Kumar</span>
                    </h1>
                    <p className="title">
                    I am a self-taught web developer who is passionate about design and development. I love tackling problems and finding solutions that make a difference. With every project, I put my heart into creating something that not only works, but also looks and feels great.
                    </p>
                    <CallToAction
                        text="Contact me"
                        action={() => {
                            scrollToSection("contact");
                        }}
                    />
                </div>
                <div className="right-col">
                    <img
                        src={man}
                        alt="Hello I am Aditya Kumar"
                    />

                    {/* <div className="highlights horizontal">
                        <div className="icon">
                            <CgGym />
                        </div>
                        <div className="text">Fitness Enthusiat</div>
                    </div>

                    <div className="highlights verticle">
                        <div className="icon">
                            <CgSketch />
                        </div>
                        <div className="text">
                            <span></span>
                            Sketch Artist
                        </div>
                    </div> */}

                </div>
            </div>
        </div>
    );
};

export default IntroContent;
