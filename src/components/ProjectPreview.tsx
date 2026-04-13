import { useNavigate } from "react-router-dom";

interface ProjectPreviewProps {
    thumbnail: string;
    title: string;
    date: string;
    url: string;
    desc: string;
    external?: boolean;
    id?: string;
}
// DESKTOP
const ProjectPreview = ({
    thumbnail,
    title,
    date,
    url,
    desc,
    external,
    id,
}: ProjectPreviewProps) => {
    const navigate = useNavigate();
    const active = "mb-[1.25em] group hover:cursor-pointer block";

    if (external) {
        return (
            <a id={id} className={active} href={url} target="_blank" rel="noreferrer">
                <img
                    className="hover:opacity-80 transition duration-400 border-[.5px] border-gray-300"
                    src={thumbnail}
                    alt={title}
                ></img>
                <div className="opacity-50 flex pt-[.5rem]">
                    <p>
                        {title} · {date}
                    </p>
                    <div className="opacity-0 translate-y-[1px] group-hover:opacity-100 text-[12px]">
                        &nbsp;&nbsp;↗
                    </div>
                </div>

                <div className="pt-[.2rem] pb-[.35em]">{desc}</div>
            </a>
        );
    }

    return (
        <div id={id} className={active} onClick={() => navigate(url)}>
            <img
                className="hover:opacity-80 transition duration-400 border-[.5px] border-gray-300"
                src={thumbnail}
                alt={title}
            ></img>
            <div className="opacity-50 flex pt-[.5rem]">
                <p>
                    {title} · {date}
                </p>
                <div className="opacity-0 translate-y-[1px] group-hover:opacity-100 text-[12px]">
                    &nbsp;&nbsp;↗
                </div>
            </div>

            <div className="pt-[.2rem] pb-[.35em]">{desc}</div>
        </div>
    );
};

//MOBILE

interface ProjectPreviewMobileProps {
    thumbnail: string;
    title: string;
    date: string;
    url: string;
    desc: string;
    external?: boolean;
}
export const ProjectPreviewMobile = ({
    thumbnail,
    title,
    date,
    url,
    desc,
    external,
}: ProjectPreviewMobileProps) => {
    const navigate = useNavigate();
    const active = "hover:cursor-pointer block pb-[1.25em]";
    if (external) {
        return (
            <a className={active} href={url} target="_blank" rel="noreferrer">
                <img
                    className="hover:opacity-80 transition duration-400 border-[.5px] border-gray-300"
                    src={thumbnail}
                    alt={title}
                ></img>
                <div className="opacity-50 flex pt-[.5rem]">
                    <p>
                        {title} · {date}
                    </p>
                    <div className="opacity-0 translate-y-[1px] group-hover:opacity-100 text-[12px]">
                        &nbsp;&nbsp;↗
                    </div>
                </div>

                <div className="pt-[.2rem] pb-[.35em]">{desc}</div>
            </a>
        );
    }

    return (
        <div className={active} onClick={() => navigate(url)}>
            <img
                className="hover:opacity-80 transition duration-400 border-[.5px] border-gray-300"
                src={thumbnail}
                alt={title}
            ></img>
            <div className="opacity-50 flex pt-[.5rem]">
                <p>
                    {title} · {date}
                </p>
                <div className="opacity-0 translate-y-[1px] group-hover:opacity-100 text-[12px]">
                    &nbsp;&nbsp;↗
                </div>
            </div>

            <div className="pt-[.2rem] pb-[.35em]">{desc}</div>
        </div>
    );
};

export default ProjectPreview;
