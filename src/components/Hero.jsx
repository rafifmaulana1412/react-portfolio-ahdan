import React from 'react';

export default function Hero(){
  return (
    <section id="about" className="py-5">
      <div className="container text-center" data-aos="fade-up">
        <h1 className="display-5 fw-bold text-info">Hi, I'm Ahdan, A passionate Web Developer crafting clean and functional websites.</h1>
        <p className="lead text-secondary mx-auto" style={{maxWidth:800}}>
          I’m a Web Developer who loves turning ideas into interactive and responsive websites. My background in Arabic Literature at the University of Indonesia helps me think critically and communicate clearly, which I now apply in the world of technology. I believe great websites go beyond design — they’re about creating experiences people enjoy. I’m currently leveling up my skills in Fullstack Web Development and crafting projects that are impactful and accessible for everyone.
        </p>
        <div className="d-flex justify-content-center gap-3 mt-4" data-aos="zoom-in" data-aos-delay="200">
        <a href="/cv-ahdan.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-info px-4"
          >
          Download CV </a>
        <a href="#contact" className="btn btn-outline-light px-4">Contact Me</a>
        </div>
      </div>
    </section>
  );
}
