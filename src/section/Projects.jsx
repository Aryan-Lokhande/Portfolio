import { Link } from "react-router-dom";
import thumbnail from "../components/data/thumbnail.json";

function Projects() {
  const projectsData = thumbnail;
  
  return (
    <section id="projects" className="projects-section py-5">
      <div className="container">
        <h2 className="text-center mb-4">My Projects</h2>
        <div className="col-md-12">
          <div className="row justify-content-center">            
            {Object.entries(projectsData).map(([id, project]) => (
              <div className="col-md-4" key={id}>
                <div className="project-card position-relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="img-fluid rounded"
                  />
                  <div className="overlay d-flex flex-column justify-content-center align-items-center">
                    <Link to={`/project/${id}`}>
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
