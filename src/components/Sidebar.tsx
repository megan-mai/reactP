import HomeButton from "./HomeButton";
import SidebarButton, {
    SidebarButtonMobile,
    ContactButton,
} from "./SidebarButton";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

interface SidebarProps {
    setFilter: Dispatch<SetStateAction<string>>;
    filter: string;
    //closed or open?
    toggleNav?: string;
    setToggleNav?: Dispatch<SetStateAction<string>>;
}

/*DESKTOP SIDEBAR*/
const Sidebar = ({ setFilter, filter }: SidebarProps) => {
    const [open, setOpen] = useState(0); //default closed

    return (
        <div className=" w-[15%] min-w-[200px] h-full pt-[1.25rem] mr-[4em] ml-[2em] fixed top-0 whitespace-nowrap antialiased translate-x-[-344px] translate-y-[120px]">
            <div
                className="hover:cursor-pointer rounded-[.2em] hover:animate-fade  pt-[4em] "
                id="profile"
            >
                <div>Megan Mai</div>
                <div className="">UX + UI Designer</div>
            </div>

            <div className="border-t-[.5px] my-[.5rem] opacity-50"></div>

            <SidebarButton
                title="All Projects"
                details="6"
                setFilter={setFilter}
                id=""
                filter={filter}
            />

            <SidebarButton
                title="UX"
                details="4"
                setFilter={setFilter}
                id="UX"
                filter={filter}
            />

            <SidebarButton
                title="Frontend"
                details="1"
                setFilter={setFilter}
                id="frontend"
                filter={filter}
            />

            <SidebarButton
                title="Research"
                details="1"
                setFilter={setFilter}
                id="research"
                filter={filter}
            />

            <div className="border-t-[.5px] my-[.5rem] opacity-50"></div>

            <ContactButton
                title="About"
                details="2"
                open={open}
                setOpen={setOpen}
            />

            <div className="border-t-[.5px] my-[.5rem] opacity-50"></div>

            <div className="flex   pt-[.2em]">
                <a
                    className="opacity-40 hover:opacity-100"
                    href="mailto:mpmai99@g.ucla.edu"
                >
                    Contact
                </a>
                <span className="opacity-40">∙</span>
                <a
                    className="opacity-40 hover:opacity-100"
                    href="https://www.linkedin.com/in/meganmai99/"
                >
                    LinkedIn
                </a>
            </div>

            {/* 
            <a className="py-[.2em] opacity-40 flex justify-between hover:cursor-pointer hover:opacity-100">
                <div>About</div>
                <div>:3</div>
            </a> */}
        </div>
    );
};

interface SidebarMobileProps {
    state: string;
}

/*MOBILE SIDEBAR*/
export const SidebarMobile = ({ state }: SidebarMobileProps) => {
    const active =
        "py-[5px] px-[12px] hover:cursor-pointer bg-opacity-25 hover:opacity-100 text-white bg-black rounded-[10px] ";
    const inactive =
        "py-[5px] px-[12px] hover:cursor-pointer bg-opacity-40 hover:opacity-100 rounded-[10px]";

    return (
        <div
            className="text-[13px] font-fig p-[5px] bg-opacity-70 h-fit bg-gray-200 w-fit backdrop-blur-sm

        fixed bottom-[1em] left-[50%] rounded-[14px] translate-x-[-50%]"
        >
            <div className="flex justify-between">
                <a href="/" className={state == "projects" ? active : inactive}>
                    <div>Projects</div>
                </a>

                <a
                    href="/About"
                    className={state == "info" ? active : inactive}
                >
                    <div>Information</div>
                </a>

                {/* <a
                    href="https://docs.google.com/document/d/1FLpLOPq7g4eu0HbdCM-trpSZC9nh1pJlO034iSd6thI/edit"
                    className="py-[5px] px-[12px] hover:cursor-pointer bg-opacity-40 hover:opacity-100 rounded-[10px]"
                >
                    <div>Resume</div>
                </a>

                <a
                    href="https://docs.google.com/document/d/1FLpLOPq7g4eu0HbdCM-trpSZC9nh1pJlO034iSd6thI/edit"
                    className="py-[5px] px-[12px] hover:cursor-pointer bg-opacity-40 hover:opacity-100 rounded-[10px]"
                >
                    <div>About</div>
                </a> */}
            </div>
        </div>
    );
};

export default Sidebar;
