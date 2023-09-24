import React, { useState } from "react";

import Section from "../shared/section";
import Filters from "./filters";
import Showcase from "./showcase";

import "./style.scss";

const projectsData = [
    {
        id: 1,
        name: "Calculator",
        tags: ["minor"],
        media: {
            thumbnail: require("../../images/portfolio/1.png"),
        },
        link: "https://adityakumar1937.github.io/calculator/",
    },
    {
        id: 2,
        name: "Dice Game",
        tags: ["minor"],
        media: {
            thumbnail: require("../../images/portfolio/3.png"),
        },
        link: "https://adityakumar1937.github.io/dicegame/",
    },
    {
        id: 3,
        name: "Drum Kit",
        tags: ["minor"],
        media: {
            thumbnail: require("../../images/portfolio/4.png"),
        },
        link: "https://adityakumar1937.github.io/drum-kit/",
    },
    {
        id: 4,
        name: "Simon Game",
        tags: ["minor"],
        media: {
            thumbnail: require("../../images/portfolio/2.png"),
        },
        link: "https://adityakumar1937.github.io/Simon-Game/",
    },
    {
        id: 5,
        name: "Analog Clock",
        tags: ["minor"],
        media: {
            thumbnail: require("../../images/portfolio/6.png"),
        },
        link: "https://adityakumar1937.github.io/analog_watch/",
    },
    {
        id: 6,
        name: "Sean Haplin",
        tags: ["web-page"],
        media: {
            thumbnail: require("../../images/portfolio/7.png"),
        },
        link: "https://adityakumar1937.github.io/Sean-Halpin-Clone/",
    },
    {
        id: 7,
        name: "Tinder",
        tags: ["web-page"],
        media: {
            thumbnail: require("../../images/portfolio/5.png"),
        },
        link: "https://adityakumar1937.github.io/tindercopy.github.io/",
    },
    {
        id: 8,
        name: "Referrizer",
        tags: ["web-app",],
        media: {
            thumbnail: require("../../images/portfolio/8.png"),
        },
        link: "https://referrizer-react-app.netlify.app/",
    },
    {
        id: 9,
        name: "Nike Product Design",
        tags: ["designs",],
        media: {
            thumbnail: require("../../images/portfolio/10.png"),
        },
        link: "https://dribbble.com/shots/21254102-NIKE-Landing-Page",
    },
    {
        id: 10,
        name: "Domino's Redesigned",
        tags: ["designs",],
        media: {
            thumbnail: require("../../images/portfolio/11.png"),
        },
        link: "https://dribbble.com/shots/21122273-Domino-s-Redesigned",
    },
    {
        id: 11,
        name: "Abha Electricals",
        tags: ["wordpress",],
        media: {
            thumbnail: require("../../images/portfolio/9.png"),
        },
        link: "https://abhaelectricals.com/",
    },
];

const Portfolio = () => {
    const [projects, setProjects] = useState(projectsData);
    const [transition, setTransition] = useState(false);

    const filterProjects = (tag) => {
        setTransition("zoomout");

        setTimeout(() => {
            if (tag !== "all") {
                const filteredProjects = projectsData.filter((f) =>
                    f.tags.includes(tag)
                );
                setProjects(filteredProjects);
            } else {
                setProjects(projectsData);
            }
            setTransition("zoomin");
        }, 200);

        setTimeout(() => {
            setTransition(false);
        }, 600);
    };

    return (
        <Section
            id="portfolio"
            title="Check My Portfolio"
            background="light"
        >
            <div className="portfolio-content-wrapper">
                <Filters filterProjects={(tag) => filterProjects(tag)} />
                <Showcase
                    data={projects}
                    transition={transition}
                />
            </div>
        </Section>
    );
};

export default Portfolio;
