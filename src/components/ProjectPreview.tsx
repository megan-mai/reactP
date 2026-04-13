import { useNavigate } from "react-router-dom";
import testImage from "../test.png";

interface ProjectPreviewProps {
    thumbnail: string;
    title: string;
    date: string;
    url: string;
    desc: string;
    external?: boolean;
}
// DESKTOP
const ProjectPreview = ({
    thumbnail,
    title,
    date,
    url,
    desc,
    external,
}: ProjectPreviewProps) => {
    const navigate = useNavigate();
    const active = "mb-[4em] group hover:cursor-pointer block";

    if (external) {
        return (
            <a className={active} href={url} target="_blank">
                <img
                    className="hover:opacity-80 transition duration-400 rounded-md"
                    src={thumbnail}
                ></img>
                <div className="opacity-50 flex pt-[.975rem]">
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
                className="hover:opacity-80 transition duration-400 rounded-md"
                src={thumbnail}
            ></img>
            <div className="opacity-50 flex pt-[.975rem]">
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
    const active = "hover:cursor-pointer block pb-[2.5em]";
    const inactive = "hidden";

    if (external) {
        return (
            <a className={active} href={url} target="_blank">
                <img
                    className="hover:opacity-80 transition duration-400 rounded-lg"
                    src={thumbnail}
                ></img>
                <div className="flex justify-between  pt-[.5rem] ">
                    <p>
                        {title} · {date}
                    </p>
                    <div className="opacity-0 group-hover:opacity-100 text-[12px]">
                        ↗
                    </div>
                </div>

                {/* <div className="pt-[.5rem]">{desc}</div> */}
            </a>
        );
    }

    return (
        <div className={active} onClick={() => navigate(url)}>
            <img
                className="hover:opacity-80 transition duration-400 rounded-lg"
                src={thumbnail}
            ></img>
            <div className="flex justify-between  pt-[.5rem] ">
                <p>
                    {title} · {date}
                </p>
                <div className="opacity-0 group-hover:opacity-100 text-[12px]">
                    ↗
                </div>
            </div>

            {/* <div className="pt-[.5rem]">{desc}</div> */}
        </div>
    );
};

export default ProjectPreview;
