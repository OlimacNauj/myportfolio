import React from "react";

const projects = [
  {
    name: "Personal Finance Web App",
    description:
      "A full-stack web application build with Java Spring Boot and Vue.js that helps users track personal finances. This project was written collaboratively with a multi-disciplinary team",
    technologies: ["Java", "Spring Boot", "Vue.js", "Axios"],
    image: "project2.jpeg", // Add the image filename here
    link: "https://github.com/khanhbrandy/CSIS3275",
  },
  {
    name: "Canadian Historical Energy Consumption and Greenhouse Gas Emissions",
    description:
      "Using oficial data from the Canadian government, this project analyzes energy consumption and greenhouse gas emissions in Canada for 20 years. The project offers insights regarding the relationship between population and economic growth, Industry and region specific emissions.",
    technologies: ["Tableau", "Excel", "Data Visualization", "Data Cleaning"],
    image: "TableuProject.jpg",
    link: "https://public.tableau.com/app/profile/juan.restrepo1520/vizzes",
  },
  {
    name: "Canadian Data Job Market Analysis",
    description:
      "Using Selenium to scrape google, collected and analyzed data on the Canadian job market to identify trends and insights. Natural language processing was used to analyze job descriptions. The project also features a fine tuned transformer model to predict salaries based on job descriptions.",
    technologies: [
      "Python",
      "Selenium",
      "Scikit-learn",
      "Pandas",
      "Matplotlib",
      "Machine Learning",
      "NLTK",
      "Transformers",
      "Hugging Face",
    ],
    image: "DataJobMarket.png",
    link: "https://github.com/OlimacNauj/Canadian-Data-Job-Market-Analysis",
  },

  {
    name: "Flight Price Prediction",
    description:
      "A dataset from Kaggle that was collected from the Indian flight market. The dataset contains information on flight prices, dates, and other relevant information. The project features a machine learning model that predicts flight prices based on the data provided.",
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
    name: "Peer to Peer Lending Web app",
    description:
      "A full-stack web application using the MERN stack that allows users to lend and borrow multiple items like tools, musical equipment, and more, from other users in their community. The project uses a RESTful API and features user authentication using JWT. ",
    technologies: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "JWT",
      "RESTful API",
    ],
    image: "logoMERN.jpeg",
    link: "https://github.com/OlimacNauj/p2p-renting-MERN-stack-app",
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
            <h3 className="project-title">{project.name}</h3>
            {/* Image for each project */}
            <img
              src={`${process.env.PUBLIC_URL}/assets/${project.image}`}
              alt={project.name}
              className="project-image"
              onClick={() => window.open(project.link, "_blank")}
            />
            <div className="project-link">
              <p className="project-description">{project.description}</p>
              <ul className="Project-tech">
                {project.technologies.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
