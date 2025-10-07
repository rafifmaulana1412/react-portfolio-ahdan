import React from 'react';

const skills = [
  { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  { name: 'Sequelize', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg' },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'DBeaver', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dbeaver/dbeaver-original.svg' },
  { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'API', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/api/api-original.svg' }
];

export default function Skills(){
  return (
    <section id="skills" className="py-5 bg-black">
      <div className="container" data-aos="fade-up">
        <h2 className="text-info fw-bold text-center mb-4">Tech Stack</h2>
        <div className="row justify-content-center">
          {skills.map((s, idx) => (
            <div key={idx} className="col-4 col-sm-3 col-md-2 text-center mb-4" data-aos="zoom-in" data-aos-delay={idx*80}>
              <img src={s.logo} alt={s.name} style={{height:64}} />
              <div className="skill-name">{s.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
