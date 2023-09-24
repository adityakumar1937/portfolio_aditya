import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";

import CallToAction from "../shared/CallToAction";
import TechIcons from "../../images/tech-icons.png";
import Section from "../shared/section";
import Resume from "../../download/Aditya Kumar - Resume 2023.pdf";

import "./style.scss";

const Skills = () => {
    return (
        <Section
            background="dark"
            id="skills"
        >
            <div className="skills-content-wrapper">
                <div className="left-col">
                    <img
                        src={TechIcons}
                        alt="JavaScript, React, CSS, HTML, SASS, Photoshop, Figma"
                    />
                </div>
                <div className="right-col">
                    <h2>Skills</h2>
                    <p>
                        🚀 Hey there! I'm the frontend wizard you've been
                        waiting for! 🧙‍♂️ With HTML, CSS, and JS, I craft
                        eye-catching designs and bring interactivity to life! 💃
                        Adding Bootstrap and TailwindCSS for lightning-fast,
                        responsive websites. 🏎️<br/><br/> 🔗 GitHub keeps my teamwork and
                        code management on point. 🤹‍♂️ Need designs? Figma's got
                        us covered! 🍰 And for sleek styles, SCSS is my secret
                        weapon! 🌈 🌟 <br/><br/>Let's embark on an epic web development
                        adventure together! 🎉 Together, we'll create digital
                        masterpieces that amaze and inspire! Are you ready?
                        Let's go! 🚀
                    </p>
                    <CallToAction
                        text="Download CV"
                        icon={<AiOutlineCloudDownload />}
                        action={() => window.open(Resume)}
                    />
                </div>
            </div>
        </Section>
    );
};

export default Skills;
