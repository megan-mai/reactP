import test_project_data from "../test_project.json"


export interface ProjectData {
    title: string;
    sections: Section[];
}

interface Section {
    title: string;
    body: SectionNode[]
}

interface SectionNode {
    node: TextNode | ImageNode;
}



interface TextNode {
    nodeType: "TextNode";
    body: string;
    header: string;
}

interface ImageNode {
    nodeType: "ImageNode";
    url: string;
    caption: string;
}

interface ProjectProps {
    data: ProjectData;
}

const Project = ({data}: ProjectProps) => {
    const title = data.title;
    const sections = data.sections;

    return (<div><p>{title}</p>{sections.map((section) => (<div><p>{section.title}</p>{section.body.map((sectionNode) => (<p>{JSON.stringify(sectionNode.node)}</p>))}</div>))}</div>);
}

export default Project;
// {sectionNode.node.type === "TextNode" ? <p>Text Node</p> : <p>ImageNode</p>}