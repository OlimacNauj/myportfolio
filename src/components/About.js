import React from "react";

const About = ({ darkMode }) => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-me">
          <img
            src="/assets/dark-photo.jpg"
            alt="Juan Camilo Restrepo"
            className="profile-photo"
          />
          <h2>About Me</h2>
          <p>
            I'm Juan Camilo Restrepo, a Data Scientist and Data Analyst with a
            strong foundation in theoretical physics, having completed my
            Bachelor's degree at Universidad del Valle (Colombia) with a thesis
            in Cosmology. My background as a math and physics teacher has
            sharpened my communication skills, allowing me to explain complex
            ideas clearly and efficiently.
          </p>

          <p>
            I recently completed a <strong>Post Baccalaureate Diploma</strong>{" "}
            in{" "}
            <strong>Computer and Information Systems and Data Analytics</strong>{" "}
            from <strong>Douglas College</strong> in Canada. This program
            allowed me to dive deep into data science, machine learning, and
            software development, where I worked on several projects applying
            these skills to real-world applications. I’ve gained hands-on
            experience in <strong>SQL</strong>, <strong>data cleaning</strong>,{" "}
            <strong>statistical analysis</strong>, and{" "}
            <strong>machine learning techniques</strong> that help uncover
            hidden insights in data.
          </p>

          <p>
            My current interests revolve around the use of{" "}
            <strong>Machine Learning</strong> to tackle problems that were
            previously unsolvable. I am fascinated by the power of AI and its
            ability to transform industries, but I remain grounded in the
            understanding that AI is not the solution to every problem. Because
            of my deep appreciation for mathematics, I tend to go beyond simply
            applying pre-built APIs or models. I strive to understand the{" "}
            <strong>limitations, assumptions, and implications</strong> of every
            tool I use, ensuring that I am applying the most appropriate
            solution for each problem.
          </p>

          <p>
            I approach data science with a comprehensive toolkit that includes
            research skills, data preprocessing, exploratory data analysis, and
            modeling. I’m skilled in leveraging{" "}
            <strong>statistical techniques</strong> to extract meaningful
            patterns from data, ensuring that every decision is backed by
            evidence. Whether it's building predictive models, conducting
            research, or diving deep into mathematical theory, I am driven by
            the belief that understanding the fundamental principles behind the
            tools I use is key to delivering impactful results.
          </p>

          <p>
            Throughout my journey, I’ve completed projects in both{" "}
            <strong>software development</strong> and{" "}
            <strong>data science</strong>, ranging from developing full-stack
            applications to building machine learning models. My ability to
            bridge the gap between these fields allows me to develop end-to-end
            solutions, from data collection and cleaning, to building and
            deploying predictive models.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
