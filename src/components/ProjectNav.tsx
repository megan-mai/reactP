import React, { useState, useEffect, useRef } from "react";
import ProjectNavButton, { ProjectNavButtonMobile } from "./ProjectNavButton";
import HomeButton, { HomeButtonMobile } from "./HomeButton";
import Home from "../pages/Home";

interface ProjectNavProps {
    titles: string[];
    sectionInView: string;
    date: string;
    skills: string;
    url: string;
}

//DESKTOP
const ProjectNav = ({
    titles,
    sectionInView,
    date,
    skills,
    url,
}: ProjectNavProps) => {
    return (
        <div className="h-full ml-[1em] fixed top-0 font-fig translate-x-[-300px] translate-y-[200px]">
            <div className="flex min-w-[14em]">
                <HomeButton url="/" title="Back" />
                <a className=" hover:opacity-70 px-[8px] py-[2px] w-fit bg-gray-200 text-sm hover:cursor-pointer rounded-[.1em] hover:animate-fade mr-[.75em]">
                    Visit <span className="text-[.75em] ml-[.5em]">↗</span>
                </a>
            </div>

            <hr className="dotted mb-[.5rem] mt-[.8rem]"></hr>

            {titles.map((title) => (
                <ProjectNavButton
                    url={`#${title}`}
                    title={title}
                    sectionInView={sectionInView}
                />
            ))}

            <hr className="dotted my-[.5rem]"></hr>

            {/* <ul className="py-[.3rem] flex justify-between opacity-50 text-sm">
                <li>Date</li>
                <li>{date}</li>
            </ul> */}

            <ul className="py-[.3rem] flex justify-between opacity-50 text-sm">
                <li>Tools</li>
                <li>{skills}</li>
            </ul>

            <ul className="py-[.3rem] flex justify-between opacity-50 text-sm">
                <li>Role</li>
                <li>Solo Designer</li>
            </ul>

            {/* <hr className="dotted my-[.5rem]"></hr> */}

            {/* <ProjectNavButton title="Client" url={url} details="↗" /> */}
        </div>
    );
};

interface ProjectNavMobileProps {
    titles: string[];
    sectionInView: string;
    date: string;
    skills: string;
    url: string;
}

//

//MOBILE
export const ProjectNavMobile = ({
    titles,
    sectionInView,
    date,
    skills,
    url,
}: ProjectNavMobileProps) => {
    return (
        <div className="bg-white opacity-100">
            <hr className="dotted mb-[]"></hr>

            {/* nav */}
            <div className="overflow-scroll no-scrollbar ">
                <div className=" my-[.6em] flex ml-[calc(50vw-(8em/2))]">
                    {titles.map((title, index) => (
                        <ProjectNavButtonMobile
                            url={`#${title}`}
                            title={title}
                            sectionInView={sectionInView}
                            id={index.toString()}
                        />
                    ))}
                </div>
            </div>

            <hr className="dotted mt-[0]"></hr>
        </div>
    );
};

export default ProjectNav;
