import React from "react";
import { Link } from "react-router-dom";
import sortAlgo from "../assets/Sort_Algorithm.png";
import miniPro from "../assets/mini_project.png"

const projectsData = [
  {
    id: 1,
    title: "Sort Algorithm Visualization",
    image: sortAlgo,
    codeLink: "https://github.com/Aryan-Lokhande/Sort-Algorithm",
    demoLink: "https://aryan-lokhande.github.io/Sort-Algorithm/",
  },
  {
    id: 2,
    title: "Mini Projects",
    image: miniPro,
    codeLink: "https://github.com/Aryan-Lokhande/mini_projects",
    demoLink: "https://aryan-lokhande.github.io/mini_projects/",
  },

];

function Projects() {
  return (
    <section id="projects" className="projects-section py-5">
      <div className="container">
        <h2 className="text-center mb-4">My Projects</h2>
        <div className="col-md-12">
          <div className="row justify-content-center">
            {projectsData.map((project) => (
              <div className="col-md-4" key={project.id}>
                <div className="project-card position-relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="img-fluid rounded"
                  />
                  <div className="overlay d-flex flex-column justify-content-center align-items-center">
                    <Link to={`/project/${project.id}`}>
                      <h5 className="text-white">{project.title}</h5>
                    </Link>

                    <div className="mt-2">
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-light btn-sm me-2"
                      >
                        <i className="fas fa-code"></i> View Code
                      </a>
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-light btn-sm"
                      >
                        <i className="fas fa-external-link-alt"></i> Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
