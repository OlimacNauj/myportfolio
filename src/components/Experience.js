import React from "react";

const jobs = [
  {
    title: "Bilingual High-school Physics Teacher",
    company: "Redcol Holding, Colombia",
    date: "August 2021 - March 2022",
    description: "",
  },
  {
    title: "Physics and Math Teacher",
    company: "Grupo Hermanos Pardo, Colombia",
    date: "January 2018- August 2021",
    description: "",
  },
  {
    title: "Teacher and Academic Coordinator",
    company: "Universidad del Valle",
    date: "August 2017 - July 2018",
    description: "",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2>💼Experience</h2>
      {jobs.map((job, index) => (
        <div className="exp-item" key={index}>
          <h3>{job.title}</h3>
          <p className="company">{job.company}</p>
          <p className="date">{job.date}</p>
          {job.description && <p className="description">{job.description}</p>}
        </div>
      ))}
    </section>
  );
};

export default Experience;
