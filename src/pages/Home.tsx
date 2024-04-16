import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import ProjectPreview, {
    ProjectPreviewMobile,
} from "../components/ProjectPreview";
import { useMediaQuery } from "@uidotdev/usehooks";
import Header from "../components/Header";
import Sidebar, { SidebarMobile } from "../components/Sidebar";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { ProjectData } from "./Project";

interface HomeProps {
    projects: ProjectData[];
}

/* 
// DESKTOP */
const Home = ({ projects }: HomeProps) => {
    useEffect(() => {
        document.title = "Megan Mai";
    }, []);

    const [filter, setFilter] = useState("");

    //MEDIUM SCREEN
    if (useMediaQuery("only screen and (max-width : 1130px)")) {
        return (
            <div className="App bg-grey text-sm font-fig">
                {/* CONTAINER */}
                <div
                    id="container"
                    className=" mx-auto max-w-[1000px] px-[2em] w-[60%] min-w-[500px]"
                >
                    {/* <Sidebar setFilter={setFilter} filter={filter} /> */}
                    <div id="main" className=" pt-[6rem]  ">
                        <div className="pb-[2em] text-base">
                            {" "}
                            <span className=" ">Megan Mai</span>
                            <br></br>
                            UX + UI Design
                        </div>

                        <Header></Header>

                        <br></br>

                        <p>Selected Work</p>
                        <br></br>

                        {projects
                            .filter(
                                (project) =>
                                    filter === "" ||
                                    project.tags.includes(filter),
                            )
                            .map((project) => (
                                <ProjectPreview
                                    thumbnail={project.thumbnail}
                                    title={project.title}
                                    date={project.date}
                                    url={project.url}
                                    desc={project.desc}
                                    external={project.external}
                                />
                            ))}
                    </div>
                    <div className="flex justify-between text-base pb-[4em]">
                        <a
                            className="opacity-40 hover:opacity-100"
                            href="mailto:mpmai99@g.ucla.edu"
                        >
                            mpmai99@g.ucla.edu
                        </a>
                        <div>
                            <a
                                className="opacity-40 hover:opacity-100 mr-[1em]"
                                href="https://www.linkedin.com/in/meganmai99/"
                            >
                                LinkedIn
                            </a>
                            <a
                                className="opacity-40 hover:opacity-100"
                                href="https://docs.google.com/document/d/1FLpLOPq7g4eu0HbdCM-trpSZC9nh1pJlO034iSd6thI/edit"
                            >
                                Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="App text-sm font-fig">
                {/* CONTAINER */}
                <div
                    id="container"
                    className=" mx-auto max-w-[1000px] px-[2em] w-[45%]"
                >
                    <Sidebar setFilter={setFilter} filter={filter} />

                    <div id="main" className=" py-[6rem]  min-w-[400px]">
                        <Header></Header>

                        {projects
                            .filter(
                                (project) =>
                                    filter === "" ||
                                    project.tags.includes(filter),
                            )
                            .map((project) => (
                                <ProjectPreview
                                    thumbnail={project.thumbnail}
                                    title={project.title}
                                    date={project.date}
                                    url={project.url}
                                    desc={project.desc}
                                    external={project.external}
                                />
                            ))}
                    </div>
                    <br></br>
                    <br></br>
                </div>
            </div>
        );
    }
};

/* 
// MOBILE */
export const MobileHome = ({ projects }: HomeProps) => {
    const [filter, setFilter] = useState("");
    const [toggleNav, setToggleNav] = useState("closed");

    return (
        <div className="App text-sm font-fig">
            {/* CONTAINER */}
            <div id="container" className=" mx-[1rem]">
                <SidebarMobile
                    setFilter={setFilter}
                    filter={filter}
                    //open or closed?
                    toggleNav={toggleNav}
                    setToggleNav={setToggleNav}
                />

                <div id="main" className=" w-full mt-[1em] mb-[4em]">
                    <div className="pt-[.4em] pb-[1em]" id="profile">
                        <div>Megan Mai</div>
                        <div>UX design, etc.</div>
                    </div>
                    <Header></Header>
                    {projects
                        .filter(
                            (project) =>
                                filter === "" || project.tags.includes(filter),
                        )
                        .map((project) => (
                            <ProjectPreviewMobile
                                thumbnail={project.thumbnail}
                                title={project.title}
                                date={project.date}
                                url={project.url}
                                desc={project.desc}
                                external={project.external}
                            />
                        ))}
                    <br></br>
                </div>
            </div>
        </div>
    );
};

export default Home;
