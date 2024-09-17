import React from "react";

const About = ({ darkMode }) => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <img
          src={darkMode ? "/assets/dark-photo.jpg" : "/assets/light-photo.jpg"}
          alt="Juan Camilo Restrepo"
          className="profile-photo"
        />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm a Data Scientist/Data Analyst, based in Vancouver, BC, with a
            background in theoretical physics. I have hands-on experience in
            machine learning, statistical modeling, and data visualization using
            tools like Python, Power BI, and Tableau.
          </p>
          <p>
            I also have a background in software development, allowing me to
            build end-to-end data solutions. I strive to transform complex data
            into actionable business insights.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
