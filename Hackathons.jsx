import React from 'react';

const Hackathon = [
  {
    title: 'Web development Hackathon',
    image: 'https://res.cloudinary.com/dpgznywjo/image/upload/v1748354864/ChatGPT_Image_May_27_2025_07_37_53_PM_cxilmx.png',
    description: 'Participated in my first hackathon at SIR C R REDDY COLLEGE, building a skill-sharing web prototype and gaining hands-on experience in web development.',
    link: 'https://www.linkedin.com/posts/tejasri-ganugula-98801a274_today-i-participated-a-hackathon-on-web-development-activity-7291420778711986176-tpVp?utm_source=share&utm_medium=member_desktop&rcm=ACoAAELsGfgBReEN5ewmeKv_PyUtk7tM4dsraW4'
  },
  {
    title:'Future Spark Web App',
    image: 'https://res.cloudinary.com/dpgznywjo/image/upload/v1748342772/ChatGPT_Image_May_27_2025_04_14_51_PM_iqogcb.png',
    link: 'https://github.com/GanugulaTejasri/Education-rural',
    description: 'A free educational platform with video lessons, tests, and an AI chatbot.',
  }
];

const Hackathons = () => {
  return (
    <div className="page" id="hackathons">
      <div className='projects-section'>
        <h2 className="projects-title">Hackathons</h2>
        <p className="projects-subtitle">— Hackathons Done —</p>
        <div className='projects-container'>
          {Hackathon.map((hackathon, index) => (
            <div className='project-card' key={index}>
              <div className='project-img-circle'>
                <img src={hackathon.image} alt={hackathon.title} />
              </div>
              <h3>{hackathon.title}</h3>
              <p>{hackathon.description}</p>
              <a href={hackathon.link} className='project-button' target='_blank' rel='noopener noreferrer'>View</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hackathons;
