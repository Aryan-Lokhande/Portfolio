import React from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import imagedetails from "./data/images.json";
import projectDetails from "./data/description.json";
import "./ProjectDetails.css";

function ProjectDetail() {
  const { id } = useParams();
  let [idx, setIdx] = useState(id);
  const project = projectDetails[idx];
  const images = imagedetails[idx];
  const subPoint = project.subPoints;

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
    setTimeout(() => {
      const projectsSection = document.getElementById("projects");
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  function onTemp() {
    navigate("/temp");
  }

  const changeProject = (val) => {
    setIdx(val);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const projectTabs = [
    { value: "1", label: "One" },
    { value: "2", label: "Two" },
    { value: "3", label: "Three" },
    { value: "4", label: "Four" },
  ];

  if (!project) {
    return <h2 className="text-center mt-5">Project Not Found</h2>;
  }

  return (
    <div className="project-details-container">
      <div className="project-nav-buttons">
        <motion.div
          whileHover={{ x: -6 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          <Button variant="outlined" onClick={handleBack}>
            <i className="fas fa-arrow-left me-2"></i> Back
          </Button>
        </motion.div>
      </div>

      <div className="text-center project-btn-group">
        <div className="custom-tab-container">
          {projectTabs.map((tab) => {
            const isActive = String(idx) === String(tab.value);
            return (
              <button
                key={tab.value}
                className={`custom-tab-btn ${isActive ? "active" : ""}`}
                onClick={() => changeProject(tab.value)}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-tab-glow"
                    className="active-tab-bg"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
                <span className="tab-text">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="container project-title">
        <h1 className="text-center">{project.title}</h1>
      </div>

      <section className="project-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 project-images-container">
              {images.map((image, index) => (
                <div className="row mb-3" key={index}>
                  <div className="col-12">
                    <img src={image.src} alt={image.alt} />
                  </div>
                </div>
              ))}
            </div>
            <div className="col-md-6">
              <div className="card project-details-card">
                <div className="card-body ">
                  <h2 className="card-title">Details</h2>
                  <hr />
                  <p
                    className="card-text"
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  ></p>
                  {subPoint && (
                    <section className="project-subpoints">
                      {subPoint.map((ele, index) => (
                        <div key={index}>
                          <br />
                          <h3>{ele.title}</h3>
                          <hr />
                          <p dangerouslySetInnerHTML={{ __html: ele.des }}></p>
                        </div>
                      ))}
                    </section>
                  )}
                  <br />
                  <section className="project-source-buttons">
                    {project.demoLink && (
                      <Button href={project.demoLink} target="_blank">
                        <i className="fas fa-external-link-alt"></i>
                        &nbsp;&nbsp;Live Demo
                      </Button>
                    )}
                    &nbsp;&nbsp;
                    <Button href={project.codeLink} target="_blank">
                      <i className="fas fa-code"></i>
                      &nbsp;&nbsp;View Code
                    </Button>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetail;
