import React from "react";

const Education = () => {
  return (
    <section id="education" className="education">
      <h2>Education</h2>
      <div className="edu-item">
        <h3>Douglas College, Canada</h3>
        <p>
          Post Baccalaureate in Computer Information Systems, Data Analytics.
          2024
        </p>
        <p>
          <strong>Awards:</strong>
        </p>
        <ul>
          <li>Dean's List: 2 terms</li>
          <li>Honour roll: 3 terms</li>
        </ul>
        <p></p>
      </div>
      <div className="edu-item">
        <h3>Universidad del Valle, Colombia</h3>
        <p>Bachelor of Science in Physics (Físico/ Physicist). 2017</p>
        <p>
          <strong>Awards:</strong>
        </p>
        <ul>
          <li>
            Academic Excellence Award (Top 5 students of the semester), First
            place: 1 semester
          </li>
          <li>
            Academic Excellence Award (Top 5 students of the semester), Second
            place: 3 semesters
          </li>
        </ul>
        <p>
          Undergraduate thesis on gravitational perturbations and cosmic
          inflation models.
        </p>
      </div>
    </section>
  );
};

export default Education;
