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

            <a
                href="https://docs.google.com/document/d/1FLpLOPq7g4eu0HbdCM-trpSZC9nh1pJlO034iSd6thI/edit"
                className="py-[.2em] opacity-40 flex justify-between hover:cursor-pointer hover:opacity-100"
            >
                <div>Resume</div>
                <div>1</div>
            </a>
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

/*MOBILE SIDEBAR*/
export const SidebarMobile = ({
    setFilter,
    filter,
    toggleNav,
    setToggleNav,
}: SidebarProps) => {
    return (
        <div className="pb-[.4em] h-fit bg-white fixed bottom-0 left-0 right-0 whitespace-nowrap">
            <hr className=""></hr>
            <SidebarButtonMobile
                title=""
                details={toggleNav === "open" ? "close" : "menu"}
                filter={filter}
                toggleNav={toggleNav}
                setToggleNav={setToggleNav}
            />
            <div
                className={
                    toggleNav === "open"
                        ? "h-[9rem] transition-all duration-400"
                        : "h-[0px] overflow-hidden  transition-all duration-400"
                }
            >
                <hr></hr>

                <hr></hr>

                <a className="p-[1em] opacity-50 flex justify-between hover:cursor-pointer hover:opacity-100">
                    <div>Contact</div>
                    <div>4 links</div>
                </a>
                <hr></hr>

                <a className="p-[1em] opacity-50 flex justify-between hover:cursor-pointer hover:opacity-100">
                    <div>Resume</div>
                    <div>1 file</div>
                </a>
                <hr></hr>

                <a className="p-[1em] opacity-50 flex justify-between hover:cursor-pointer hover:opacity-100">
                    <div>About</div>
                    <div>:3</div>
                </a>
            </div>
        </div>
    );
};

export default Sidebar;
