import React from 'react';
 // Link to your CSS file
import { HashRouter as Router } from "react-router-dom";

const Skills = () => {
  return (
    <div className="page">
    <div className='skills-section' id="skills">
      {/* Left Side: Text */}
      <div className="skills-left">
        <h2>My creative skills & experiences.</h2>
        <p>Since beginning my career, I’ve gained two years of experience teaching Python and recent technologies...</p>
        <p>I am a web developer with a solid background in front-end technologies (HTML, CSS, JavaScript)...</p>
        <p>My skill set includes core Python and Java, with basic knowledge in ethical hacking...</p>
      </div>

      {/* Right Side: Skills Bars */}
      <div className="skills-right">
        <div className="skill">
          <span className="skill-name">HTML <span className="percent">90%</span></span>
          <div className="skill-bar"><div className="skill-fill html"></div></div>
        </div>
        <div className="skill">
          <span className="skill-name">CSS <span className="percent">75%</span></span>
          <div className="skill-bar"><div className="skill-fill css"></div></div>
        </div>
        <div className="skill">
          <span className="skill-name">JavaScript <span className="percent">85%</span></span>
          <div className="skill-bar"><div className="skill-fill js"></div></div>
        </div>
        <div className="skill">
          <span className="skill-name">SQL <span className="percent">70%</span></span>
          <div className="skill-bar"><div className="skill-fill sql"></div></div>
        </div>
        <div className="skill">
          <span className="skill-name">Java <span className="percent">80%</span></span>
          <div className="skill-bar"><div className="skill-fill java"></div></div>
        </div>
        <div className="skill">
          <span className="skill-name">Python <span className="percent">95%</span></span>
          <div className="skill-bar"><div className="skill-fill python"></div></div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Skills;
