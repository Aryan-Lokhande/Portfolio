import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import thumbnail from "../components/data/thumbnail.json";

function Projects() {
  const projectsData = thumbnail;
  
  // Animation configuration for container stagger behavior
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Slower stagger delay so the user can easily see each card appear one-by-one
      },
    },
  };

  // Animation configuration for individual cards (simulates placing a card down on a table)
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.85, 
      y: -50, 
      rotate: -4 
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 30, // Soft, gentle spring tension
        damping: 15,   // Smooth deceleration without aggressive bouncing
        duration: 1.2, // Slow, premium feeling
      },
    },
  };

  return (
    <section id="projects" className="projects-section py-5">
      <div className="container">
        <h2 className="text-center mb-4 fw-semibold">My Projects</h2>
        <div className="col-md-12">
          <motion.div 
            className="row justify-content-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >            
            {Object.entries(projectsData).map(([id, project]) => (
              <motion.div 
                className="col-md-4" 
                key={id}
                variants={cardVariants}
              >
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
