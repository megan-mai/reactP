import { useNavigate } from "react-router-dom";
import testImage from "../test.png";


interface ProjectPreviewProps {
    thumbnail: string;
    title: string;
    date: string;
    url: string;
}

const ProjectPreview = (props: ProjectPreviewProps) => {
    const navigate = useNavigate();

    return(
        <div className="mt-[3em] hover:cursor-pointer"onClick={() => navigate(props.url)}>


                <img src={props.thumbnail} ></img>
          
            <div className="flex justify-between py-[.5rem]">
            <p>{props.title}</p>
            <p>{props.date}</p>
            </div>
            <br></br>

          

        </div>
    )
}

export default ProjectPreview;