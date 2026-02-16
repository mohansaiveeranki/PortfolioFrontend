import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import ProjectsPage from "./Pages/ProjectsPage";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <>
      <div className="app_bg_container">
       <Routes>
        <Route path="/" element={<Layout/>}>
         <Route path="projects" element={<ProjectsPage/>}></Route>
         <Route index element={<HomePage/>}></Route>
        </Route>
       </Routes>
      </div>
    </>
  );
}


export default App;
