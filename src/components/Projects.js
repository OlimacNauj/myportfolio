import React from "react";

const projects = [
  {
    name: "Flight Price Prediction Model",
    description:
      "Developed a predictive model to forecast flight prices using Python and machine learning techniques.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "Matplotlib",
      "Machine Learning",
    ],
    image: "project1.jpeg", // Add the image filename here,
    link: "https://github.com/OlimacNauj/FlightPricePredictor",
  },
  {
    name: "Personal Finance Web App",
    description:
      "A full-stack web application that helps users track personal finances.",
    technologies: ["Java", "Spring Boot", "Vue.js", "Axios"],
    image: "project2.jpeg", // Add the image filename here
    link: "https://github.com/khanhbrandy/CSIS3275",
  },
  {
    name: "Canadian Historical Energy Consumption and Greenhouse Gas Emissions",
    description:
      "A full-stack web application that helps users track personal finances.",
    technologies: ["Tableau", "Excel", "Data Visualization", "Data Cleaning"],
    image: "TableuProject.jpg",
    link: "https://public.tableau.com/app/profile/juan.restrepo1520/vizzes",
  },
  {
    name: "Canadian Data Job Market Analysis",
    description:
      "Collected and analyzed data on the Canadian job market to identify trends and insights. Natural language processing was used to analyze job descriptions. The project also features a fine tuned transformer model to predict salaries based on job descriptions.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "Matplotlib",
      "Machine Learning",
      "NLTK",
      "Transformers",
      "Hugging Face",
    ],
    image: "project1.jpeg", // Add the image filename here,
    link: "https://github.com/OlimacNauj/Canadian-Data-Job-Market-Analysis",
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
            <a href={project.link}>Project Link</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
