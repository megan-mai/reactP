import test_project_data from "../test_project.json";
import Text from "../components/Text";
import { useState } from "react";
import ProjectImage from "../components/ProjectImage";
import ProjectNav from "../components/ProjectNav";
import SectionTitle from "../components/SectionTitle";

export interface ProjectData {
    title: string;
    date: string;
    skills: string;
    sections: Section[];
    url: string;
}

interface Section {
    title: string;
    body: any[];
}

interface ProjectProps {
    data: ProjectData;
}

const Project = ({ data }: ProjectProps) => {
    const [sectionInView, setSectionInView] = useState("");

    const title = data.title;
    const date = data.date;
    const url = data.url;
    const skills = data.skills;
    const sections = data.sections;
    let titles = [];

    for (let i = 0; i < sections.length; i++) {
        titles.push(sections[i].title);
    }

    return (
        <div className="font-light flex mx-auto w-[50rem] translate-x-[-7.5rem] text-sm">
            <ProjectNav
                titles={titles}
                sectionInView={sectionInView}
                date={date}
                skills={skills}
                url={url}
            ></ProjectNav>
            <div className="pt-[2.5em] w-[70%] ">
                <p>{title}</p>
                <br></br>
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
                                ) : (
                                    <ProjectImage
                                        url={sectionNode.url}
                                        caption={sectionNode.caption}
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

export default Project;

// interface SectionNode {
//     node: TextNode | ImageNode;
// }

// interface TextNode {
//     nodeType: "TextNode";
//     body: string;
//     header: string;
// }

// interface ImageNode {
//     nodeType: "ImageNode";
//     url: string;
//     caption: string;
// }
