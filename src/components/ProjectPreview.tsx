import { useNavigate } from "react-router-dom";
import testImage from "../test.png";

interface ProjectPreviewProps {
    thumbnail: string;
    title: string;
    date: string;
    url: string;
    filter: string;
    tags: string[];
}

const ProjectPreview = ({
    thumbnail,
    title,
    date,
    url,
    filter,
    tags,
}: ProjectPreviewProps) => {
    const navigate = useNavigate();
    const active = "mt-[3em] hover:cursor-pointer block";
    const inactive = "mt-[3em] hover:cursor-pointer hidden";

    return (
        <div
            className={
                tags.includes(filter) || filter === "" ? active : inactive
            }
            onClick={() => navigate(url)}
        >
            <img src={thumbnail}></img>

            <div className="flex justify-between py-[.5rem]">
                <p>{title}</p>
                <p>{date}</p>
            </div>
            <br></br>
        </div>
    );
};

export default ProjectPreview;
