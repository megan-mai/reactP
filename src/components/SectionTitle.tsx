import { useIntersectionObserver } from "@react-hooks-library/core";
import {Dispatch, SetStateAction, useEffect, useRef} from "react";


interface SectionTitleProps {
title: string;
//setSectionInView is passed as function 
setSectionInView: Dispatch<SetStateAction<string>>;
}

const SectionTitle = ({title, setSectionInView}: SectionTitleProps) => {
     const inner = useRef(null);
     const {inView} = useIntersectionObserver(inner);

     useEffect(() => {
        if(inView){
            setSectionInView(title)
        }
     },[inView, title, setSectionInView])

    return(
        <h3 ref={inner}>{title}</h3>
    )
}

export default SectionTitle;