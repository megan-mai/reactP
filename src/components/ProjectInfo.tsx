interface ProjectInfoProps {
    date: string;
    client: string;
    services: string;
}

const ProjectInfo = (props: ProjectInfoProps) => {
    return(
        <div>
            Details
            <div> </div>
            Year: {props.date}
            <br></br>
            Services: {props.services}
            <br></br>

            <br></br>
            




        </div>
    )
}

export default ProjectInfo;