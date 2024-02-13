import ProjectImage from "../components/ProjectImage";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import ProjectInfo from "../components/ProjectInfo";
import ProjectNav from "../components/ProjectNav";
import Sidebar from "../components/Sidebar";
import testImage from "../test.png";
import Home from "../pages/Home";
import HomeButton from "../components/HomeButton";
import Text from "../components/Text";
import Quote from "../components/Quote";
import React, { useEffect, useRef, useState } from "react";
import type { RefObject } from "react";
import SectionTitle from "../components/SectionTitle";
import Project, { ProjectData } from "./Project";
import test_project from "../test_project.json";

const Spotify = () => {
    const [sectionInView, setSectionInView] = useState("");

    return (
        <div
            id="container"
            className="flex mx-auto w-[50rem] translate-x-[-7.5rem] font-light text-sm leading-5"
        >
            {/* <ProjectNav></ProjectNav> */}

            <div id="main" className="pt-[2rem] w-[70%]">
                <SectionTitle
                    title="section 1"
                    setSectionInView={setSectionInView}
                />
                <Text body="Algorithmic reccomendation systems in streaming services prevent users from diversifying their music taste." />

                <Text
                    header="Community-based music discovery."
                    body="Users should discover music through each other, with minimal algorithmic aid.  Allow users to put their account on slow- where they can tune into the live activity of the users they follow, but are limited in their ability to select and skip songs."
                />

                <Text
                    header="Abundance of choice in streaming causes decision paralysis."
                    body="Decision paralysis fits into the modern model of media distribution well. In the era of streaming, decision is an obligation, and it is exhausting. Drivers juggle with their phone at the wheel of a car, roadtrips that start communally and end with five pairs of airpods in full use; users have become increasingly intolerant of that which isn’t precisely what they want to hear at the time."
                />

                <ProjectImage url={testImage} caption="this is the caption" />

                <h3> event 2</h3>

                <ProjectImage url={testImage} caption="this is the caption" />

                <ProjectImage url={testImage} caption="this is the caption" />

                <Quote
                    text="After surveying 5,000 people in France, the UK, Germany, USA and Brazil, Deezer found that 65% of respondents only listen to music they know. On a more positive note, 60% of respondents wanted to discover new music. But their quest was lost to apathy or “being too busy and feeling overwhelmed by the amount of choice available” (the two most common blockers recorded by survey respondents). Deezer calls the phenomenon outlined by their survey results as ’musical paralysis’"
                    source="Sound of life, 2022"
                    url="https://serious-parent-4b6.notion.site/Stream-Slow-b1e77485d4c84675ab5400b085429916"
                />

                <p>
                    Self Portrait (2020) is a meditative game inspired by
                    California flora and the excitement of new mediums. In
                    reflecting on process we can connect the dots between
                    influences and the final piece.
                </p>
            </div>
        </div>
    );
};

export default Spotify;
