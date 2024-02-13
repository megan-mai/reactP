import { useIntersectionObserver } from "@react-hooks-library/core";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";

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
        <h3 className="scroll-mt-[2em]" id={title} ref={inner}>
            {title}
        </h3>
    );
};

export default SectionTitle;
