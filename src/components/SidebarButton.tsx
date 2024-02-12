
interface SidebarProps {
    url: string;
    title: string;
    details?: string;
}

const SidebarButton = (props: SidebarProps) => {
    return(
        <div className = "py-[.2em] flex justify-between opacity-50 hover:opacity-100 hover:cursor-pointer font-light text-sm">
        <a href={props.url}> 
        {props.title}
        </a>

        <div>{props.details}</div>

        </div>

    )
}

export default SidebarButton;

