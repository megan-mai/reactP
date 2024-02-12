import React, { useState, useEffect, useRef } from 'react';
import SidebarButton from "./SidebarButton";
import HomeButton from "./HomeButton";
import Home from "../pages/Home";


const ProjectNav =() => {


 
    return(
        <div className=" w-[30%] h-full pt-[2em] mr-[4em] sticky top-0"
        >
            
            <HomeButton
            url="/"
            />

            <hr
            className="dotted my-[.5rem]"
            ></hr>
          
            <SidebarButton
             url="google.com" 
             title="Problem"
             />

            <SidebarButton
             url="google.com" 
             title="White Paper Research"
             />

            <SidebarButton
             url="google.com" 
             title="Wireframes"
             />

            <SidebarButton
             url="google.com" 
             title="Prototyping"
             />

            <SidebarButton
             url="google.com" 
             title="Testing"
             />


          
            <hr
            className="dotted my-[.5rem]"
            ></hr>

          
            <SidebarButton
             url="google.com" 
             title="Date"
             details ="2022"
             />

            <SidebarButton
             url="google.com" 
             title="Skills"
             details ="Figma, JS"
             />

            <hr
            className="dotted my-[.5rem]"
            ></hr>

          


            <SidebarButton
             url="google.com" 
             title="Visit"
             details= "↗"
             />





        </div>
    )
}

export default ProjectNav;