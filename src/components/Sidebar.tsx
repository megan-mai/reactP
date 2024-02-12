import SidebarButton from "./SidebarButton";


const Sidebar =() => {
    return(
        <div className=" w-[30%] h-full pt-[2.5rem] mr-[4em] sticky top-0 text-sm"
        >
            <div className="flex pb-[.2rem] justify-between" id="profile"> 
            <div>
                Megan Mai</div>
            <div>Brooklyn, NY</div>
            </div>


            <hr
            className="dotted my-[.5rem]"
            ></hr>
         
            <SidebarButton
             url="google.com" 
             title="UX Design"
             details="4 projects"
             />

            <SidebarButton
             url="google.com" 
             title="Frontend"
             details="2 projects"
             />

            <SidebarButton
             url="google.com" 
             title="Research"
             details="1 project"
             />
            
            <hr
            className="dotted my-[.5rem]"
            ></hr>

            <SidebarButton
             url="google.com" 
             title="Contact"
             details="4 links"
             />

            <SidebarButton
             url="google.com" 
             title="Resume"
             details="1 file"
             />


            <SidebarButton
             url="google.com" 
             title="About"
             />




        </div>
    )
}

export default Sidebar;