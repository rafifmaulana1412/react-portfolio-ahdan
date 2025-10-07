import React from 'react';
import { motion } from 'framer-motion';

const placeholders = [1,2,3];

export default function Projects(){
  return (
    <section id="projects" className="py-5">
      <div className="container" data-aos="fade-up">
        <h2 className="text-info fw-bold text-center mb-4">Projects</h2>
        <div className="row">
          {placeholders.map((p, i) => (
            <div className="col-md-4 mb-4" key={i}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i*0.15 }}
                className="card bg-secondary text-light h-100 border-0 shadow-sm"
                whileHover={{ scale: 1.03 }}
              >
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Coming Soon</h5>
                  <p className="card-text text-muted">Project placeholder {i+1}</p>
                  <div className="mt-auto">
                    <button className="btn btn-outline-light" disabled>Details</button>
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
