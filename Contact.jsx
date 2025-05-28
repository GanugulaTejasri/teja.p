import React, { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    const words = ["Contact with me :)"];
    let i = 0;
    let j = 0;
    let isDeleting = false;
    let currentWord = '';
    const speed = {
      typing: 150,
      deleting: 80,
      pause: 1000
    };

    const typeEffect = () => {
      currentWord = words[i];
      const textElement = document.getElementById("changing");

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
          setTimeout(typeEffect, speed.pause);
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
    <div className="page" id="contact">
      <h2 className="projects-title">Contact</h2>
      <p><b>Name:</b> Tejasri Ganugula</p>
      <p><b>Email:</b> <a href="mailto:tejasriganugula@gmail.com">tejasriganugula@gmail.com</a></p>
      <p><b>Location:</b> Gudivada, Krishna District, India</p>
     <b><span id='changing' className="moving-footer"></span></b>

    </div>
  );
}

export default Contact;
