interface ProjectImageProps {
    url: string;
    caption: string;
    padding?: string;
    size?: string;
}

const ProjectImage = (props: ProjectImageProps) => {
    return (
        <div className={` m-auto w-[${props.size}%]`}>
            <img className="mt-[2em] border-[1px]" src={props.url}></img>
            <p className="text-gray-500 text-sm pt-[.4em] pb-[2em]">
                {props.caption}
            </p>
        </div>
    );
};

interface ProjectImageGroupProps {
    urls: string[];
    captions?: string[];
    cols: string;
    size?: string;
}

export const ImageGroup = (props: ProjectImageGroupProps) => {
    return (
        <div className="my-[2em] ">
            <div className={`grid gap-2 grid-cols-${props.cols}`}>
                {props.urls.map((image, index) => (
                    // <ProjectImage
                    //     url={image}
                    //     caption={props.captions ? props.captions[index] : ""}
                    // />
                    <div className={`w-[${props.size}%] m-auto`}>
                        <img className="border-[1px]" src={image}></img>
                        <p className="pt-[.5em] text-gray-500 text-sm">
                            {props.captions ? props.captions[index] : ""}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectImage;
