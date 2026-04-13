import { Dispatch, SetStateAction, useState, useEffect, useRef } from "react";

interface SidebarProps {
    title: string;
    setFilter?: Dispatch<SetStateAction<string>>;
    filter?: string;
    id?: string;
    url?: string;
    details?: string;
    setToggleNav?: Dispatch<SetStateAction<string>>;
    toggleNav?: string;
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
        "py-[.2rem] flex justify-between opacity-100 hover:opacity-100 hover:cursor-pointer text-sm";
    const unclickedStyle =
        "py-[.2rem] flex justify-between opacity-40 hover:opacity-100 hover:cursor-pointer text-sm";

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

interface ContactButtonProps {
    title: string;
    url?: string;
    details?: string;
    setToggleNav?: Dispatch<SetStateAction<string>>;
    toggleNav?: string;
    open: number;
    setOpen: Dispatch<SetStateAction<number>>;
}

export const ContactButton = ({
    url,
    title,
    details,
    open,
    setOpen,
}: ContactButtonProps) => {
    const handleOpen = (open: number) => setOpen(open === 1 ? 0 : 1);

    const clickedStyle =
        "py-[.2em] flex justify-between opacity-100 hover:opacity-100 hover:cursor-pointer text-sm transition";
    const unclickedStyle =
        "py-[.2em] flex justify-between opacity-40 hover:opacity-100 hover:cursor-pointer text-sm";

    return (
        <div>
            {/* accordion header */}
            <div
                onClick={() => handleOpen(open)}
                className={open === 1 ? clickedStyle : unclickedStyle}
            >
                <a>{title}</a>
                <div>2</div>
            </div>

            {/* accordion body */}
            <div className={open === 1 ? "h-auto" : "overflow-hidden h-[0px]"}>
                <a className=" pl-[1em] py-[.3em] opacity-40 flex justify-between hover:cursor-pointer hover:opacity-100">
                    <a href="https://www.linkedin.com/in/meganmai99/">
                        LinkedIn
                    </a>
                </a>
                <a className=" pl-[1em] py-[.3em] opacity-40 flex justify-between hover:cursor-pointer hover:opacity-100">
                    <a href="mailto:mpmai99@g.ucla.edu">Email</a>
                </a>
                {/* <a className=" pl-[1em] py-[.3em] opacity-40 flex justify-between hover:cursor-pointer hover:opacity-100">
                    <a href="https://www.linkedin.com/in/meganmai99/">
                        read.cv
                    </a>
                </a> */}
            </div>
        </div>
    );
};

export const SidebarButtonMobile = ({
    url,
    title,
    details,
    setFilter,
    setToggleNav,
    toggleNav,
    id,
}: SidebarProps) => {
    function onSidebarClick() {
        if (toggleNav === "closed") {
            setToggleNav("open");
        } else {
            setToggleNav("closed");
        }
    }

    return (
        <div
            onClick={() => onSidebarClick()}
            className="p-[1em] flex justify-between opacity-50 active:opacity-100 text-sm transition duration-400"
        >
            <a>{title}</a>

            <div>{details}</div>
        </div>
    );
};

export default SidebarButton;
