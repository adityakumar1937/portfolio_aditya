import React from "react";
import {
    FaDribbble,
    FaGithub,
    FaLinkedinIn,
    // FaStackOverflow,
    FaInstagram,
} from "react-icons/fa";

import Section from "../shared/section";
import Logo from "../../images/logo.png";
import SocialIcon from "./social-icon";
import { scrollToSection } from "../utils/helpers";

import "./style.scss";

const Footer = () => {
    return (
        <Section
            background="dark"
            className="footer"
        >
            <div className="footer-content-wrapper">
                <div className="footer-logo">
                    <img
                        src={Logo}
                        alt="JS Dev Hindi"
                    />
                </div>
                <ul className="footer-menu-items">
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("skills")}
                    >
                        Skills
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("portfolio")}
                    >
                        Portfolio
                    </li>
                    {/* <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("blogs")}
                    >
                        Blogs & Articles
                    </li> */}
                    <li
                        className="footer-menu-item"
                        action={() => {
                            scrollToSection("contact");
                        }}
                    >
                        Contact me
                    </li>
                </ul>
                <div className="social-icons">
                    <SocialIcon
                        color="#FF0000"
                        icon={<FaDribbble />}
                        link="https://dribbble.com/akathebond"
                    />
                    <SocialIcon
                        color="#0D2636"
                        icon={<FaGithub />}
                        link="https://github.com/adityakumar1937"
                    />
                    <SocialIcon
                        color="#0A66C2"
                        icon={<FaLinkedinIn />}
                        link="https://www.linkedin.com/in/aditya-kumar-820763238/"
                    />
                    {/* <SocialIcon
                        color="#f2740d"
                        icon={<FaStackOverflow />}
                        
                    /> */}
                    <SocialIcon
                        color="#E84C88"
                        icon={<FaInstagram />}
                        link="https://www.instagram.com/tanjun_aditya/"
                    />
                </div>
                <div className="bottom-bar">
                    <div className="copyright-text">
                        Copyright 2023 Aditya Kumar | All Rights Reserved
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Footer;
