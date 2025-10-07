import React from 'react';

export default function Contact(){
  return (
    <section id="contact" className="py-5 bg-black">
      <div className="container text-center" data-aos="fade-up">
        <h2 className="text-info fw-bold mb-3">Get in touch</h2>
        <p className="text-secondary">I'm open to new opportunities — feel free to reach out!</p>
        <div className="d-flex justify-content-center gap-3 mb-3">
          <a className="btn btn-info" href="mailto:m.ahdanrafif@gmail.com">Email Me</a>
          <a className="btn btn-outline-light" href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn btn-outline-light" href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
        <p className="text-secondary">Or download my CV:</p>
        <a href="/cv.pdf" download className="btn btn-info">Download CV</a>
      </div>
    </section>
  );
}
