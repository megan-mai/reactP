import HomeButton from "./HomeButton";
import SidebarButton from "./SidebarButton";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";

interface SidebarProps {
    setFilter: Dispatch<SetStateAction<string>>;
    filter: string;
}

const Sidebar = ({ setFilter, filter }: SidebarProps) => {
    return (
        <div className=" w-[30%] min-w-[200px] h-full pt-[2.5rem] mr-[4em] sticky top-0 text-sm whitespace-nowrap">
            <div
                className="flex pb-[.2rem] justify-between bg-black bg-opacity-0 hover:bg-opacity-5 hover:cursor-pointer rounded-[.2em] hover:animate-fade  pt-[.5rem] pb-[.5rem]npm mb-[-.5em] "
                id="profile"
            >
                <div>Megan Mai</div>
                <div>Design Engineer</div>
            </div>

            <hr className="solid my-[.5rem]"></hr>

            <SidebarButton
                title="All"
                details="7 projects"
                setFilter={setFilter}
                id=""
                filter={filter}
            />

            <SidebarButton
                title="UX Design"
                details="4 projects"
                setFilter={setFilter}
                id="UX"
                filter={filter}
            />

            <SidebarButton
                title="Frontend"
                details="2 projects"
                setFilter={setFilter}
                id="frontend"
                filter={filter}
            />

            <SidebarButton
                title="Research"
                details="1 project"
                setFilter={setFilter}
                id="research"
                filter={filter}
            />

            <hr className="dotted my-[.5rem]"></hr>

            <SidebarButton
                url="google.com"
                title="Contact"
                details="4 links"
                setFilter={setFilter}
            />

            <SidebarButton
                url="google.com"
                title="Resume"
                details="1 file"
                setFilter={setFilter}
            />

            <SidebarButton
                url="google.com"
                title="About"
                setFilter={setFilter}
            />
        </div>
    );
};

export default Sidebar;
