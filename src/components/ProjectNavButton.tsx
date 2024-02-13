interface ProjectNavButton {
    title: string;
    url?: string;
    sectionInView?: string;
    details?: string;
}

const ProjectNavButton = ({
    url,
    title,
    sectionInView,
    details,
}: ProjectNavButton) => {
    const inViewStyle =
        "py-[.2em] flex justify-between opacity-100 hover:opacity-100 hover:cursor-pointer font-light text-sm";
    const outViewStyle =
        "py-[.2em] flex justify-between opacity-50 hover:opacity-100 hover:cursor-pointer font-light text-sm";

    return (
        <div className={sectionInView === title ? inViewStyle : outViewStyle}>
            <a href={url}>{title}</a>

            <div>{details}</div>
        </div>
    );
};

export default ProjectNavButton;
