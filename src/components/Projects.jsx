import React from 'react';
import { motion } from 'framer-motion';

// ==== DATA PROJECTS ====
const projects = [
  {
    title: "Montevía Restaurant",
    description: "Fullstack Restaurant Website – React, Express, PostgreSQL, JWT, RBAC. MVC",
    demoLink: "https://final-project-frontend-tau-seven.vercel.app/",
  },
  {
    title: "Wedding Invitation",
    description: "Frontend Project with react, bootstrap",
    demoLink: "https://wedding-invitation-psi-lac.vercel.app/",
  },
  {
    title: "Yayasan Al Muttaqiin Gorontalo",
    description: "Project With React, Tailwind, backend serverless midtrans",
    demoLink: "https://yayasan-almuttaqiin.vercel.app/",
  },
   {
    title: "Yayasan Hidayatullah Gorontalo",
    description: "Project With React",
    demoLink: "https://yayasan-hidayatullah-gorontaloutara.vercel.app/",
  },
];

export default function Projects(){
  return (
    <section id="projects" className="py-5">
      <div className="container" data-aos="fade-up">
        <h2 className="text-info fw-bold text-center mb-4">Projects</h2>
        <div className="row">
          {projects.map((p, i) => (
            <div className="col-md-4 mb-4" key={i}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="card bg-secondary text-light h-100 border-0 shadow-sm"
                whileHover={{ scale: 1.03 }}
              >
                <div className="card-body d-flex flex-column">
                  
                  {/* Title */}
                  <h5 className="card-title">{p.title}</h5>
                  
                  {/* Description */}
                  <p className="card-text text-muted">{p.description}</p>

                  <div className="mt-auto">
                    {p.demoLink ? (
                      <a 
                        href={p.demoLink}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline-light"
                      >
                        Visit
                      </a>
                    ) : (
                      <button className="btn btn-outline-light" disabled>
                        Details
                      </button>
                    )}
                  </div>

                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
