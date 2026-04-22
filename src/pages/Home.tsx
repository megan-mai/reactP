import { useEffect } from "react";
import ProjectPreview, {
    ProjectPreviewMobile,
} from "../components/ProjectPreview";
import { useMediaQuery } from "@uidotdev/usehooks";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
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

    //MEDIUM SCREEN
    if (useMediaQuery("only screen and (max-width : 800px)")) {
        return (
            <div className="App bg-grey text-sm font-fig">
                {/* CONTAINER */}
                <div
                    id="container"
                    className=" mx-auto max-w-[1000px] px-[2em] w-[60%] min-w-[500px]"
                >
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

                        {projects.map((project, index) => (
                                <ProjectPreview
                                    key={project.title}
                                    id={`project-${index}`}
                                    thumbnail={project.thumbnail}
                                    title={project.title}
                                    date={project.date}
                                    url={project.url}
                                    desc={project.desc}
                                    external={project.external}
                                />
                            ))}
                        <div className="opacity-40 text-sm pb-[1em]">Website designed and developed by me, 2026</div>
                        <div className="pb-[3em]"></div>
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
                    <Sidebar projects={projects} />

                    <div id="main" className="pt-[12px] min-w-[400px] ml-[4em]">
                        <Header></Header>

                        {projects.map((project, index) => (
                                <ProjectPreview
                                    key={project.title}
                                    id={`project-${index}`}
                                    thumbnail={project.thumbnail}
                                    title={project.title}
                                    date={project.date}
                                    url={project.url}
                                    desc={project.desc}
                                    external={project.external}
                                />
                            ))}
                        <div className="opacity-40 text-sm pb-[1em]">Website designed and developed by me, 2026</div>
                        <div className="pb-[3em]"></div>
                    </div>
                </div>
            </div>
        );
    }
};

/* 
// MOBILE */
export const MobileHome = ({ projects }: HomeProps) => {
    return (
        <div className="App text-sm font-fig">
            {/* CONTAINER */}
            <div id="container" className=" mx-[.75rem]">
                <a href="/About" className="fixed top-[1em] right-[1em] opacity-40 hover:opacity-100 z-10">Info</a>

                <div id="main" className=" w-full mt-[1em] mb-[4em]">
                    <div className="pb-[2em]" id="profile">
                        <div>Megan Mai</div>
                        <div className="italic">Design Engineer</div>
                        <div className="opacity-60 leading-[1.3rem] whitespace-normal" style={{ textWrap: "balance" }}>
                            Previously at{" "}
                            <a className="underline hover:no-underline" href="https://nation.io/" target="_blank" rel="noreferrer">
                                NATION
                            </a>
                            .
                        </div>
                    </div>
                    <div className="flex justify-center pb-[2em]">
                        <img className="w-[140px] h-[140px] rounded-full object-contain" src="assets/thumbnails/marker_lines_2dots_transparent.png" alt="Profile" />
                    </div>
                    {projects.map((project) => (
                            <ProjectPreviewMobile
                                key={project.title}
                                thumbnail={project.thumbnail}
                                title={project.title}
                                date={project.date}
                                url={project.url}
                                desc={project.desc}
                                external={project.external}
                            />
                        ))}
                    <div className="opacity-40 text-sm pb-[1em]">Website designed and developed by me, 2026</div>
                </div>
            </div>
        </div>
    );
};

export default Home;
