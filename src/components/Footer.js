import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p>Connect with me:</p>
      <a
        href="https://www.linkedin.com/in/jrestrepob/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          alt="LinkedIn"
          src="./assets/LinkedIn-Logos/LI-In-Bug.png"
          className="linkedin_img"
        />
      </a>{" "}
      <a
        href="https://github.com/OlimacNauj"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          alt="GitHub"
          src="./assets/github-mark-c791e9551fe4/github-mark/github-mark-white.png"
          className="github_img"
        ></img>
      </a>
    </footer>
  );
};

export default Footer;
