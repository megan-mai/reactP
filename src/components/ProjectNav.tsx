import React, { useState, useEffect, useRef } from "react";
import ProjectNavButton from "./ProjectNavButton";
import HomeButton from "./HomeButton";
import Home from "../pages/Home";

interface ProjectNavProps {
    titles: string[];
    sectionInView: string;
    date: string;
    skills: string;
    url: string;
}

const ProjectNav = ({
    titles,
    sectionInView,
    date,
    skills,
    url,
}: ProjectNavProps) => {
    return (
        <div
            className=" w-[30%] h-full pt-[2em] mr-[4em] sticky top-0 
        "
        >
            <HomeButton url="/" />

            <hr className="dotted my-[.5rem]"></hr>

            {titles.map((title) => (
                <ProjectNavButton
                    url={`#${title}`}
                    title={title}
                    sectionInView={sectionInView}
                />
            ))}

            {/* <SidebarButton
             url="google.com" 
             title="Problem"
             />

            <SidebarButton
             url="google.com" 
             title="White Paper Research"
             />

            <SidebarButton
             url="google.com" 
             title="Wireframes"
             />

            <SidebarButton
             url="google.com" 
             title="Prototyping"
             />

            <SidebarButton
             url="google.com" 
             title="Testing"
             /> */}

            <hr className="dotted my-[.5rem]"></hr>

            <ul className="py-[.2em] flex justify-between opacity-50 font-light text-sm">
                <li>Date</li>
                <li>{date}</li>
            </ul>

            <ul className="py-[.2em] flex justify-between opacity-50 font-light text-sm">
                <li>Skills</li>
                <li>{skills}</li>
            </ul>

            <hr className="dotted my-[.5rem]"></hr>

            <ProjectNavButton title="Visit" url={url} details="↗" />
        </div>
    );
};

export default ProjectNav;
