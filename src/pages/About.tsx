import Header from "../components/Header";
import { SidebarMobile } from "../components/Sidebar";

const About = () => {
    return (
        <div className=" p-[1em] text-sm mb-[8em]">
            <div className="pb-[8em] flex justify-between" id="profile">
                <div>Megan Mai </div>
                <div className="opacity-50">Product Design</div>
            </div>
            <SidebarMobile state="info"></SidebarMobile>
            <div className="opacity-50 mb-[.5em]">About</div>
            <header className="leading-[1.3rem] mb-[1.5rem]">
                Hi, I'm a Brooklyn-based product designer exploring the
                relationship between optimization and innovation. When I'm not
                designing, I spend my time coding, painting, and teaching piano.
                <br></br>
                <br></br>Previously at{" "}
                <a
                    className="underline hover:no-underline"
                    href="https://nation.io/"
                >
                    NATION
                </a>
                .
            </header>{" "}
            <div className="mb-[1.5em]">
                <div className="opacity-50 mb-[.5em]">Contact</div>
                <div className="mb-[.5em]"> Currently availible for work:</div>
                <a className="underline" href="mailto:mpmai99@g.ucla.edu">
                    mpmai99@g.ucla.edu
                </a>{" "}
                <br></br>
                <a
                    className="underline"
                    href="https://www.linkedin.com/in/meganmai99/"
                >
                    LinkedIn
                </a>
                <br></br>
                <a
                    className="underline"
                    href="https://docs.google.com/document/d/1FLpLOPq7g4eu0HbdCM-trpSZC9nh1pJlO034iSd6thI/edit"
                >
                    Resume
                </a>{" "}
            </div>
            <div className="opacity-50 mb-[.5em]">Skills</div>
            <div className="mb-[1.5em]">
                {" "}
                Figma, user testing, UX design, UX research, UI design,
                storyboarding, responsive web design, mobile interface design,
                front-end development, interaction design, information
                architecture, C++, java, CSS, html, matlab, python (pandas,
                numpy), Bayesian modeling, Object-Oriented Programming, machine
                learning, WCAG coding practices
            </div>
            <div className="opacity-50 mb-[.5em]">Colophon</div>
            Website design and development by Megan Mai
            <br></br>
            Last updated: April 19, 2024
        </div>
    );
};

export default About;
