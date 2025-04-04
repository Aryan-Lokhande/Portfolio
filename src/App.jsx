import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./section/Home";

import Achievements from "./section/Achievements.jsx";
import Projects from "./section/Projects";
import QuickLinks from "./components/Quicklinks.jsx";
import ProjectDetail from "./components/ProjectDetail.jsx";
import Temp from "./components/Temp.jsx";
import Error404page from "./components/Error404page.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar />
          <Home />
          <Achievements />
          <Projects />
          <QuickLinks />
        </div>
      ),
    },
    {
      path: "/project/:id",
      element: (
        <>
          <ProjectDetail />
        </>
      ),
    },
    {
      path: "/temp",
      element: <Temp />,
    },
    {
      path: "*",
      element: <Error404page />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
