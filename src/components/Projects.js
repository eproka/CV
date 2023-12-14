import React from "react";

const Projects = () => {
  const goToGitHub = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>Notion</h3>
        <p>
          A multi-user note-taking application where each user can create,
          delete and edit their own notes.
        </p>
        <button
          className="github-button"
          onClick={() => goToGitHub("https://github.com/eproka/api_redux")}
        >
          Go to GitHub
        </button>
        <div className="technologies">
          <p>React Router DOM </p>
          <p>React DOM </p>
          <p>Redux </p>
          <p>JSON Server </p>
          <p>Zod </p>
          <p>Tailwind CSS </p>
        </div>
      </div>
      <div className="project">
        <h3>Lamoda</h3>
        <p>An online store with the ability to filter and sort products.</p>
        <button
          className="github-button"
          onClick={() => goToGitHub("https://github.com/eproka/Lamoda")}
        >
          Go to GitHub
        </button>
        <div className="technologies">
          <p>React DOM </p>
          <p>Chance </p>
        </div>
      </div>
      <div className="project">
        <h3>API & SPA</h3>
        <p>
          A multi-page application using an external API and the
          react-router-dom library.
        </p>
        <button
          className="github-button"
          onClick={() => goToGitHub("https://github.com/eproka/API-SPA")}
        >
          Go to GitHub
        </button> 
        <div className="technologies">
          <p>React Router DOM </p>
          <p>React DOM </p>
          <p>JSON Server </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
