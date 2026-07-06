import React from "react";
import { motion } from "framer-motion";
// import twitter from "../assets/twitter.png";
import "./component.css";
import linkDetail from "./data/quickLinks.json";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const QuickLinks = () => {
  const links = linkDetail[0];

  return (
    <section id="quick-links" className="quick-links-section text-white py-4">
      <div className="container text-center">
        <h3 className="quick-links-title">Connect With Me</h3>
        <motion.div
          className="quick-links-container d-flex justify-content-center flex-wrap gap-4 mt-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {links.map((link, index) => (
            <motion.div key={index} variants={itemVariants}>
              <a
                className="quick-link pop-up"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
              >
                <img
                  src={link.img}
                  alt={link.name}
                  className="quick-link-img"
                />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default QuickLinks;

