import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home, { MobileHome } from "./pages/Home";
import Test_JSON from "./projects.json";
import Project, {
    ProjectData,
    MobileProject,
    ProjectMed,
} from "./pages/Project";
import { useMediaQuery } from "@uidotdev/usehooks";
import Projects from "./projects.json";
import About from "./pages/About";

function App() {
    const desktop = useMediaQuery("only screen and (min-width : 550px)");
    // const desktopmed = useMediaQuery("only screen and (min-width : 960px)");

    const projects = Projects.projects as ProjectData[];

    if (desktop) {
        return (
            //DESKTOP
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home projects={projects} />} />
                    {projects.map((project) => (
                        <Route
                            path={project.url}
                            element={<Project data={project} />}
                        />
                    ))}
                </Routes>
            </BrowserRouter>
        );
    } else {
        return (
            //MOBILE
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<MobileHome projects={projects} />}
                    />
                    {projects.map((project) => (
                        <Route
                            path={project.url}
                            element={<MobileProject data={project} />}
                        />
                    ))}
                    <Route path="/About" element={<About></About>}></Route>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;
