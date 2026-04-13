interface ProjectNavButtonProps {
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
}: ProjectNavButtonProps) => {
    const inViewStyle =
        //ref here?
        "py-[.3rem] flex justify-between opacity-100 hover:opacity-100 hover:cursor-pointer text-sm";
    const outViewStyle =
        "py-[.3rem] flex justify-between opacity-50 hover:opacity-100 hover:cursor-pointer text-sm";

    return (
        <div className={sectionInView === title ? inViewStyle : outViewStyle}>
            <a className="flex justify-between w-full" href={url}>
                {title}
                <div>{details}</div>
            </a>
        </div>
    );
};

interface ProjectNavButtonMobileProps {
    title: string;
    url?: string;
    sectionInView?: string;
    details?: string;
    id: string;
}

export const ProjectNavButtonMobile = ({
    url,
    title,
    sectionInView,
    id,
}: ProjectNavButtonMobileProps) => {
    const inViewStyle =
        "py-[0] px-[2em] flex justify-between opacity-100 hover:opacity-100 hover:cursor-pointer text-sm whitespace-nowrap scroll-smooth";
    const outViewStyle =
        "py-[0] px-[2em] flex justify-between opacity-50 hover:opacity-100 hover:cursor-pointer text-sm whitespace-nowrap scroll-smooth";

    return (
        <div className={sectionInView === title ? inViewStyle : outViewStyle}>
            <a href={url} id={`button_${title}`}>
                {title}
            </a>
        </div>
    );
};

export default ProjectNavButton;
