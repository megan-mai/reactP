interface ProjectImageProps{
    url: string;
    caption: string;
}

const ProjectImage = (props: ProjectImageProps) => {
    return(
        <div className ="mb-[2em]">
            <img src={props.url}>
            </img>
            <p className="text-gray-500 text-sm pt-[.4em]">
            {props.caption}
            </p>
        </div>
    )
}

export default ProjectImage;