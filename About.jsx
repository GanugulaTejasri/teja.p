import React from 'react';

const About = () => {
  return (
    <div className="page" id="about">
      <div className='About'>
      <h2 style={{fontsize:'45px', color:'black', textAlign:'center'}}>About Me</h2>
      <h4 style={{textAlign:'center'}}> – who am I  – </h4>
      <p>I am <b>Tejasri Ganugula</b>, currently pursuing a B.Tech in Artificial Intelligence
       and Data Science at VKR, VNB & AGK College of Engineering. I am an aspiring developer with hands-on experience through internships, and I have 
       worked on projects such as Tele Mini Apps, My Portfolio, and a Student Performance Predictor. I am passionate about
        building user-friendly web applications that help enhance my coding skills. I am actively
         seeking opportunities to apply my knowledge in real-world scenarios and contribute in a unique and impactful way to user-focused solutions.
        </p>
      <a href="https://res.cloudinary.com/dpgznywjo/image/upload/v1748155376/cv-photo_v5retx.jpg" >
        <button className="cv">Download CV</button>
      </a>
    </div>
    </div>
  );
};

export default About; // ✅ FIXED
