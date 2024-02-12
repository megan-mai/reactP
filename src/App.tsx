import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Spotify from "./pages/Spotify";
import Test_JSON from "./test_project.json";
import Project, { ProjectData } from "./pages/Project";

function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route
          path= "/"
          element={<Home/>}
          />

          <Route
          path="/Spotify"
          element={<Spotify/>}
          />

          <Route
          path="/Chess"
          element={
          <Project
          data={Test_JSON as unknown as ProjectData}
          />}
          />
        </Routes>
      </BrowserRouter>
        
    );
}

export default App;
