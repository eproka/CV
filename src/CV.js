import React from 'react';
import Header from './components/Header';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Hobbies from './components/Hobbies';
import Languages from './components/Languages';
import Projects from './components/Projects';
import "./App.css";

const CV = () => {
  return (
    <div>
      <Header />
      <div className="content-container">
        <div className="left-column">
          <WorkExperience />
          <Projects />
        </div>
        <div className="right-column">
          <Education />
          <Hobbies />
          <Languages />
        </div>
      </div>
    </div>
  );
};

export default CV;