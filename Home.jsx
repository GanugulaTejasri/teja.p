import React, { useEffect } from 'react';

const Home = () => {
 useEffect(() => {
     const words = ["Fresher","Developer", "Coder", "Creator"];
     let i = 0;
     let j = 0;
     let isDeleting = false;
     let currentWord = '';
     const speed = {
       typing: 150,    // Slower typing
       deleting: 80,   // Moderate deleting
       pause: 1000     // Pause before deletion
     };
 
     const typeEffect = () => {
       currentWord = words[i];
       const textElement = document.getElementById("changing-text");
 
       if (textElement) {
         textElement.textContent = currentWord.substring(0, j);
       }
 
       if (!isDeleting && j < currentWord.length) {
         j++;
         setTimeout(typeEffect, speed.typing);
       } else if (isDeleting && j > 0) {
         j--;
         setTimeout(typeEffect, speed.deleting);
       } else {
         if (!isDeleting) {
           isDeleting = true;
           setTimeout(typeEffect, speed.pause); // Pause before deleting
         } else {
           isDeleting = false;
           i = (i + 1) % words.length;
           setTimeout(typeEffect, speed.typing);
         }
       }
     };
 
     typeEffect();
   }, []);

  return (
    <header id="home" className="header-content">
      <div style={{ display: 'flex'}}>
        <div className="text-info">
          <h1>Tejasri Ganugula</h1>
          <p>AI & Data Science | Frontend Developer</p>
          <h2>I am a <span id="changing-text" className="moving-word"></span></h2>
          <a
            href="https://www.linkedin.com/in/tejasri-ganugula-98801a274"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="hire-button">Hire Me</button>
          </a>
        </div>
        <div className="img-wrapper">
          <img
            src="https://res.cloudinary.com/dpgznywjo/image/upload/v1748258324/ok_r81gux_c_crop_w_1000000317_h_1000000317_ar_1_1_wv6wzx.jpg"
            alt="Tejasri Ganugula"
            className="profile-img"
            style={{ boxshadow: "0 0 12px rgba(0, 0, 0, 0.2)",flexshrink: 0, width: 'auto', height: 'auto',padding: '5px' , alignItems: 'right', marginleft: "2rem" }}
          />
        </div>
      </div>
    </header>
  );
};

export default Home;
