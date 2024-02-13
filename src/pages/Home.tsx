import React, { useState } from "react";
import logo from "./logo.svg";
import ProjectPreview from "../components/ProjectPreview";
import testImage from "../test.png";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Home = () => {
    const [filter, setFilter] = useState("");

    const projectPreviews = [
        <ProjectPreview
            url="Spotify"
            thumbnail={testImage}
            title="UX DESIGN"
            date="2024"
            filter={filter}
            tags={["UX"]}
        ></ProjectPreview>,

        <ProjectPreview
            url="Chess"
            thumbnail={testImage}
            title="FRONTEND"
            date="2024"
            filter={filter}
            tags={["frontend"]}
        ></ProjectPreview>,

        <ProjectPreview
            url="bla.com"
            thumbnail={testImage}
            title="RESEARCH"
            date="2024"
            filter={filter}
            tags={["research"]}
        ></ProjectPreview>,

        <ProjectPreview
            url="Chess"
            thumbnail={testImage}
            title="FRONTEND"
            date="2024"
            filter={filter}
            tags={["frontend"]}
        ></ProjectPreview>,
    ];

    return (
        <div className="App font-light text-sm">
            {/* CONTAINER */}
            <div
                id="container"
                className="flex mx-auto w-[50vw] translate-x-[-7.5rem] "
            >
                <Sidebar setFilter={setFilter} filter={filter} />

                <div
                    id="main"
                    className=" pt-[3rem] pr-[2em] w-[70%]  min-w-[300px]"
                >
                    <Header></Header>

                    {projectPreviews}
                </div>
            </div>
        </div>
    );
};

export default Home;
