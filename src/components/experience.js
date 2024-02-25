import React, { useState } from "react";
import "../assets/css/experience.css";
import DetailProject from "./detail-project";
import Projects from "../utils/projects";

const Experience = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalIsOpen(false);
  };
  return (
    <section
      id="experiences"
      className="container h-screen mx-auto pt-14 flex flex-col justify-evenly items-center"
    >
      <h2 className="tracking-widest text-2xl font-bold bg-gradient-to-r from-teal-600 via-lime-900 to-teal-900 text-transparent bg-clip-text">
        EXPERIENCES
      </h2>
      <span className="text-md font-light tracking-widest">
        My Best Projects?
      </span>
      <div className="flex flex-wrap gap-y-5 justify-evenly items-center text-slate-800">
        {Projects.map((project, index) => (
          <div
            key={index}
            className="card w-96 shadow-xl hover:scale-105 transition-all"
          >
            <img
              className="w-auto h-auto rounded-lg"
              src={project.images[0]}
              alt={project.title}
            />
            <div className="overlay absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300 flex justify-center items-center rounded-lg">
              <div className="text-slate-500 text-4xl opacity-100 transition-opacity duration-300">
                <i
                  className="fa-solid fa-magnifying-glass cursor-pointer"
                  onClick={() => openModal(project)}
                ></i>
              </div>
            </div>
          </div>
        ))}
      </div>

      <DetailProject
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        project={selectedProject}
      />
    </section>
  );
};

export default Experience;
