import { Dispatch, SetStateAction, useEffect, useRef } from "react";

interface SidebarProps {
    title: string;
    setFilter?: Dispatch<SetStateAction<string>>;
    filter?: string;
    id?: string;
    url?: string;
    details?: string;
}

const SidebarButton = ({
    url,
    title,
    details,
    setFilter,
    id,
    filter,
}: SidebarProps) => {
    const clickedStyle =
        "py-[.3em] flex justify-between opacity-100 hover:opacity-100 hover:cursor-pointer font-light text-sm";
    const unclickedStyle =
        "py-[.3em] flex justify-between opacity-50 hover:opacity-100 hover:cursor-pointer font-light text-sm";

    return (
        <div
            onClick={() => setFilter(id)}
            className={filter === id ? clickedStyle : unclickedStyle}
        >
            <a>{title}</a>

            <div>{details}</div>
        </div>
    );
};

export default SidebarButton;
