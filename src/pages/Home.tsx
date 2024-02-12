import React from "react";
import logo from "./logo.svg";
import ProjectPreview from "../components/ProjectPreview";
import testImage from "../test.png";
import spotify1 from "../spotify1.png";
import spotify2 from "../spotify2.png";
import spotify3 from "../spotify3.png";
import spotify4 from "../spotify4.png";


import Header from "../components/Header";
import Sidebar from "../components/Sidebar";


const Home = () => {
    return(
        <div className="App font-light text-sm">
            <div
                id="container"
                className="flex mx-auto w-[50rem] translate-x-[-7.5rem]"
            >
                                            
                 <Sidebar/>

                <div
                    id="main"
                    className=" pt-[2.5rem] w-[70%]"
                >
                    <Header></Header>
                                   
                    <ProjectPreview
                        url="Spotify"
                        thumbnail={testImage}
                                   
                        title="chess.com redesign"
                        date="2024"
                    ></ProjectPreview>

                    <ProjectPreview
                        url="Chess"
                        thumbnail={testImage}
                      

                        title="chess.com redesign"
                        date="2024"

                    ></ProjectPreview>

                    <ProjectPreview
                        url="bla.com"
                        thumbnail={testImage}
           

                        title="chess.com redesign"
                        date="2024"

                    ></ProjectPreview>

                </div>
                                        
             </div>
                   
                
        </div>
    )
}

export default Home;