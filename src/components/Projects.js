import React from "react";

const projects = [
  {
    name: "Flight Price Prediction Model",
    description:
      "Developed a predictive model to forecast flight prices using Python and machine learning techniques.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    image: "project1.jpeg", // Add the image filename here
  },
  {
    name: "Personal Finance Web App",
    description:
      "A full-stack web application that helps users track personal finances.",
    technologies: ["Java", "Spring Boot", "Vue.js", "Axios"],
    image: "project2.jpg", // Add the image filename here
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            {/* Image for each project */}
            <img
              src={`${process.env.PUBLIC_URL}/assets/${project.image}`}
              alt={project.name}
              className="project-image"
            />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <ul>
              {project.technologies.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
