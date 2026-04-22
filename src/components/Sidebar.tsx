import { useEffect, useRef, useState } from "react";
import { ProjectData } from "../pages/Project";

interface SidebarProps {
    projects: ProjectData[];
}

/*DESKTOP SIDEBAR*/
const Sidebar = ({ projects }: SidebarProps) => {
    const [activeIndex, setActiveIndex] = useState(-1);
    const [clickedIndex, setClickedIndex] = useState<number | null>(null);
    const ignoreScrollUntilRef = useRef<number>(0);

    useEffect(() => {
        const observers: IntersectionObserver[] = [];
        projects.forEach((_, index) => {
            const el = document.getElementById(`project-${index}`);
            if (el) {
                const observer = new IntersectionObserver(
                    ([entry]) => {
                        if (entry.isIntersecting) {
                            setActiveIndex(index);
                        }
                    },
                    { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
                );
                observer.observe(el);
                observers.push(observer);
            }
        });
        return () => observers.forEach((o) => o.disconnect());
    }, [projects]);

    useEffect(() => {
        const handleScroll = () => {
            if (Date.now() < ignoreScrollUntilRef.current) return;
            setClickedIndex(null);
            const atTop = window.scrollY <= 10;
            const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;
            if (atTop) setActiveIndex(0);
            else if (atBottom) setActiveIndex(projects.length - 1);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [projects.length]);

    const numberColors = [
        "#d946ef", // magenta
        "#14b8a6", // teal
        "#f59e0b", // orange-yellow
        "#d4d400", // neon yellow
        "#92400e", // brown
        "#e8441a", // red-orange
        "#556b2f", // dark olive
        "#a78bfa", // lavender
    ];

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    };

    const handleItemClick = (index: number) => {
        setClickedIndex(index);
        ignoreScrollUntilRef.current = Date.now() + 1200;
        scrollTo(`project-${index}`);
    };

    return (
        <div className=" w-[15%] min-w-[230px] max-w-[230px] mr-[5em] ml-[2em] fixed top-1/2 -translate-y-1/2 antialiased translate-x-[-216px]">
            <div
                className="hover:cursor-pointer rounded-[.2em] hover:animate-fade "
                id="profile"
            >
                <img className="w-[140px] h-[140px] rounded-full mb-[.1rem] object-cover scale-110" src="assets/thumbnails/marker_lines_2dots_transparent.png" alt="Profile" />
                <div>Megan Mai</div>
                <div className="italic">Design Engineer</div>
                <div className="opacity-60 leading-[1.3rem] mt-[rem] max-w-[230px] whitespace-normal" style={{ textWrap: "balance" }}>
                    Previously
                    at{" "}
                    <a
                        className="underline hover:no-underline"
                        href="https://nation.io/"
                    target="_blank"
                    rel="noreferrer"
                    >
                        NATION
                    </a>
                    .
                </div>
            </div>

            <div className="border-t-[.5px] my-[.5rem] opacity-100"></div>

            {projects.map((project, index) => (
                <div
                    key={project.title}
                    onClick={() => handleItemClick(index)}
                    className={`py-[.1rem] leading-[1.2rem] hover:opacity-100 hover:cursor-pointer text-sm whitespace-normal ${(clickedIndex ?? activeIndex) === index ? "opacity-100" : "opacity-40"}`}
                >
                    <span><span style={{ color: numberColors[index % numberColors.length] }}>{String(index + 1).padStart(2, "0")}</span>&nbsp;&nbsp;{project.title}</span>
                </div>
            ))}

            <div className="border-t-[.5px] my-[.5rem] opacity-100"></div>

            <div className="pt-[.2em]">
                <a
                    className="opacity-40 hover:opacity-100"
                    href="mailto:mpmai99@g.ucla.edu"
                >
                    mpmai99@gmail.com <span className="text-[.75em]">↗</span>
                </a>
            </div>
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
                <a href="/" className={state === "projects" ? active : inactive}>
                    <div>Projects</div>
                </a>

                <a
                    href="/About"
                    className={state === "info" ? active : inactive}
                >
                    <div>Information</div>
                </a>
            </div>
        </div>
    );
};

export default Sidebar;
