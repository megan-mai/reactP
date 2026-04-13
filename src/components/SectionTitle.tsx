import { useIntersectionObserver } from "@react-hooks-library/core";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";

//DESKTOP

interface SectionTitleProps {
    title: string;
    //setSectionInView is passed as function
    setSectionInView: Dispatch<SetStateAction<string>>;
}

const SectionTitle = ({ title, setSectionInView }: SectionTitleProps) => {
    const inner = useRef(null);
    const { inView } = useIntersectionObserver(inner);

    useEffect(() => {
        if (inView) {
            console.log("Setting sectionInView to " + title);

            setSectionInView(title);
        }
    }, [inView, title, setSectionInView]);

    return (
        //renders titles with ref
        <h3
            className="scroll-mt-[2em] mt-[2.5em] text-[1rem]"
            id={title}
            ref={inner}
        >
            {title}
        </h3>
    );
};

//MOBILE
interface SectionTitleMobileProps {
    title: string;
    //setSectionInView is passed as function
    setSectionInView: Dispatch<SetStateAction<string>>;
}

export const SectionTitleMobile = ({
    title,
    setSectionInView,
}: SectionTitleMobileProps) => {
    const inner = useRef(null);
    const { inView } = useIntersectionObserver(inner, {
        threshold: 0.5,
    });

    useEffect(() => {
        if (inView) {
            console.log("Setting sectionInView to " + title);
            setSectionInView(title);
            document.getElementById(`button_${title}`).scrollIntoView({
                block: "nearest",
                inline: "center",
            });
        }
    }, [inView, title, setSectionInView]);

    return (
        //renders titles with ref
        <h3 className="pt-[1em] text-lg" id={title} ref={inner}>
            {title}
        </h3>
    );
};

export default SectionTitle;
