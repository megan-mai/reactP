interface ProjectHeaderProps {
    thumbnail: string;
    title: string;
    date: string;
    desc: string;
}

const ProjectHeader = (props: ProjectHeaderProps) => {
    return (
        <div className="my-[1em]">
            <p className="text-[1rem] mb-[.25em] bold">{props.title}</p>
            <p className="opacity-50 ">{props.date}</p>
            <img className="mt-[2em] mb-[2em]" src={props.thumbnail}></img>
            <p>{props.desc}</p>
        </div>
    );
};

export default ProjectHeader;
