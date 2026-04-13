import test_project_data from "../projects.json";
import Text, { Bullet, TextRef } from "../components/Text";
import { useEffect, useState } from "react";
import ProjectImage, { ImageGroup } from "../components/ProjectImage";
import Quote from "../components/Quote";
import ProjectNav, { ProjectNavMobile } from "../components/ProjectNav";
import SectionTitle, { SectionTitleMobile } from "../components/SectionTitle";
import ProjectHeader from "../components/ProjectHeader";
import HomeButton, { HomeButtonMobile } from "../components/HomeButton";
import { useMediaQuery } from "@uidotdev/usehooks";

export interface ProjectData {
    title: string;
    date: string;
    skills: string;
    thumbnail: string;
    tags: string[];
    desc: string;
    sections: Section[];
    visit: string;
    url: string;
    headerdesc: string;
    external?: boolean;
}

interface Section {
    title: string;
    body: any[];
}

interface ProjectProps {
    data: ProjectData;
}

//DESKTOP
const Project = ({ data }: ProjectProps) => {
    useEffect(() => {
        document.title = "Megan Mai";
    }, []);
    const [sectionInView, setSectionInView] = useState("");

    const title = data.title;
    const date = data.date;
    const visit = data.visit;
    const url = data.url;
    const thumbnail = data.thumbnail;
    const skills = data.skills;
    const headerdesc = data.headerdesc;
    const sections = data.sections;
    let titles = [];

    for (let i = 0; i < sections.length; i++) {
        titles.push(sections[i].title);
    }

    //medium screen
    if (useMediaQuery("only screen and (max-width : 1130px)")) {
        return (
            <div className="leading-6 font-fig mx-auto mb-[4em] text-[.975em]">
                <div className="mt-[5.5rem] min-w-[520px] w-[70%] mx-[auto]">
                    <HomeButtonMobile url={"/"}></HomeButtonMobile>
                    <ProjectHeader
                        thumbnail={thumbnail}
                        title={title}
                        date={date}
                        desc={headerdesc}
                    ></ProjectHeader>

                    {sections.map((section) => (
                        <div>
                            <SectionTitle
                                title={section.title}
                                setSectionInView={setSectionInView}
                            />
                            {section.body.map((sectionNode) => (
                                <p>
                                    {sectionNode.nodeType === "TextNode" ? (
                                        <Text
                                            header={sectionNode.header}
                                            body={sectionNode.body}
                                        />
                                    ) : sectionNode.nodeType ===
                                      "TextRefNode" ? (
                                        <TextRef
                                            header={sectionNode.header}
                                            body={sectionNode.body}
                                            source={sectionNode.source}
                                        />
                                    ) : sectionNode.nodeType === "ImageNode" ? (
                                        <ProjectImage
                                            url={sectionNode.url}
                                            size={sectionNode.size}
                                            caption={sectionNode.caption}
                                        />
                                    ) : sectionNode.nodeType ===
                                      "ImageGroupNode" ? (
                                        <ImageGroup
                                            urls={sectionNode.urls}
                                            captions={sectionNode.captions}
                                            cols={sectionNode.cols}
                                            size={sectionNode.size}
                                        />
                                    ) : sectionNode.nodeType ===
                                      "BulletNode" ? (
                                        <Bullet
                                            points={sectionNode.points}
                                            header={sectionNode.header}
                                        />
                                    ) : (
                                        <Quote
                                            text={sectionNode.text}
                                            source={sectionNode.source}
                                            url={sectionNode.url}
                                        />
                                    )}
                                </p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        );
    } else {
        return (
            <div className="leading-6 font-fig mx-auto mb-[4em] text-[.975em]">
                <div className="mt-[5.5rem] w-[45%] mx-[auto]">
                    <ProjectNav
                        titles={titles}
                        sectionInView={sectionInView}
                        date={date}
                        skills={skills}
                        url={visit}
                    ></ProjectNav>
                    <ProjectHeader
                        thumbnail={thumbnail}
                        title={title}
                        date={date}
                        desc={headerdesc}
                    ></ProjectHeader>

                    {sections.map((section) => (
                        <div>
                            <SectionTitle
                                title={section.title}
                                setSectionInView={setSectionInView}
                            />
                            {section.body.map((sectionNode) => (
                                <p>
                                    {sectionNode.nodeType === "TextNode" ? (
                                        <Text
                                            header={sectionNode.header}
                                            body={sectionNode.body}
                                        />
                                    ) : sectionNode.nodeType ===
                                      "TextRefNode" ? (
                                        <TextRef
                                            header={sectionNode.header}
                                            body={sectionNode.body}
                                            source={sectionNode.source}
                                        />
                                    ) : sectionNode.nodeType === "ImageNode" ? (
                                        <ProjectImage
                                            url={sectionNode.url}
                                            size={sectionNode.size}
                                            caption={sectionNode.caption}
                                        />
                                    ) : sectionNode.nodeType ===
                                      "ImageGroupNode" ? (
                                        <ImageGroup
                                            urls={sectionNode.urls}
                                            captions={sectionNode.captions}
                                            cols={sectionNode.cols}
                                            size={sectionNode.size}
                                        />
                                    ) : sectionNode.nodeType ===
                                      "BulletNode" ? (
                                        <Bullet
                                            points={sectionNode.points}
                                            header={sectionNode.header}
                                        />
                                    ) : (
                                        <Quote
                                            text={sectionNode.text}
                                            source={sectionNode.source}
                                            url={sectionNode.url}
                                        />
                                    )}
                                </p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
};

//MAX 1130PX
export const ProjectMed = ({ data }: ProjectProps) => {
    useEffect(() => {
        document.title = "Megan Mai";
    }, []);
    const [sectionInView, setSectionInView] = useState("");

    const title = data.title;
    const date = data.date;
    const url = data.url;
    const thumbnail = data.thumbnail;
    const skills = data.skills;
    const headerdesc = data.headerdesc;
    const sections = data.sections;
    let titles = [];

    for (let i = 0; i < sections.length; i++) {
        titles.push(sections[i].title);
    }

    return (
        <div className="leading-6 font-fig mx-auto mb-[4em] text-[.975em]">
            <div className="mt-[5.5rem] w-[45%] mx-[auto]">
                <ProjectNav
                    titles={titles}
                    sectionInView={sectionInView}
                    date={date}
                    skills={skills}
                    url={url}
                ></ProjectNav>
                <ProjectHeader
                    thumbnail={thumbnail}
                    title={title}
                    date={date}
                    desc={headerdesc}
                ></ProjectHeader>

                {sections.map((section) => (
                    <div>
                        <SectionTitle
                            title={section.title}
                            setSectionInView={setSectionInView}
                        />
                        {section.body.map((sectionNode) => (
                            <p>
                                {sectionNode.nodeType === "TextNode" ? (
                                    <Text
                                        header={sectionNode.header}
                                        body={sectionNode.body}
                                    />
                                ) : sectionNode.nodeType === "TextRefNode" ? (
                                    <TextRef
                                        header={sectionNode.header}
                                        body={sectionNode.body}
                                        source={sectionNode.source}
                                    />
                                ) : sectionNode.nodeType === "ImageNode" ? (
                                    <ProjectImage
                                        url={sectionNode.url}
                                        size={sectionNode.size}
                                        caption={sectionNode.caption}
                                    />
                                ) : sectionNode.nodeType ===
                                  "ImageGroupNode" ? (
                                    <ImageGroup
                                        size={sectionNode.size}
                                        urls={sectionNode.urls}
                                        captions={sectionNode.captions}
                                        cols={sectionNode.cols}
                                    />
                                ) : sectionNode.nodeType === "BulletNode" ? (
                                    <Bullet
                                        points={sectionNode.points}
                                        header={sectionNode.header}
                                    />
                                ) : (
                                    <Quote
                                        text={sectionNode.text}
                                        source={sectionNode.source}
                                        url={sectionNode.url}
                                    />
                                )}
                            </p>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

//MOBILE
export const MobileProject = ({ data }: ProjectProps) => {
    const [sectionInView, setSectionInView] = useState("");

    const title = data.title;
    const date = data.date;
    const url = data.url;
    const skills = data.skills;
    const sections = data.sections;
    const headerdesc = data.headerdesc;
    const thumbnail = data.thumbnail;

    let titles = [];

    for (let i = 0; i < sections.length; i++) {
        titles.push(sections[i].title);
    }

    return (
        <div className="flex flex-col font-fig text-sm h-[100vh]">
            {/* content */}
            <div className="flex grow basis-auto px-[1.2em] overflow-scroll">
                <div>
                    <HomeButtonMobile url="/" />

                    <ProjectHeader
                        thumbnail={thumbnail}
                        title={title}
                        date={date}
                        desc={headerdesc}
                    ></ProjectHeader>
                    {sections.map((section) => (
                        <div>
                            <SectionTitleMobile
                                title={section.title}
                                setSectionInView={setSectionInView}
                            />
                            {section.body.map((sectionNode) => (
                                <p>
                                    {sectionNode.nodeType === "TextNode" ? (
                                        <Text
                                            header={sectionNode.header}
                                            body={sectionNode.body}
                                        />
                                    ) : sectionNode.nodeType === "ImageNode" ? (
                                        <ProjectImage
                                            url={sectionNode.url}
                                            size={sectionNode.size}
                                            caption={sectionNode.caption}
                                        />
                                    ) : sectionNode.nodeType ===
                                      "ImageGroupNode" ? (
                                        <ImageGroup
                                            urls={sectionNode.urls}
                                            size={sectionNode.size}
                                            captions={sectionNode.captions}
                                            cols={sectionNode.cols}
                                        />
                                    ) : sectionNode.nodeType ===
                                      "BulletNode" ? (
                                        <Bullet
                                            points={sectionNode.points}
                                            header={sectionNode.header}
                                        />
                                    ) : (
                                        <Quote
                                            text={sectionNode.text}
                                            source={sectionNode.source}
                                            url={sectionNode.url}
                                        />
                                    )}
                                </p>
                            ))}
                            <br></br>
                        </div>
                    ))}
                </div>
            </div>
            {/*header*/}
            <ProjectNavMobile
                titles={titles}
                sectionInView={sectionInView}
                date={date}
                skills={skills}
                url={url}
            ></ProjectNavMobile>
        </div>
    );
};
export default Project;
