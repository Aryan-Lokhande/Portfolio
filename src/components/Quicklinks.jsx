import React from "react";
// import twitter from "../assets/twitter.png";
import "./component.css";
import linkDetail from "./data/quickLinks.json"

const QuickLinks = () => {
  const links = linkDetail[0];

  return (
    <section id="quick-links" className="quick-links-section  text-white py-4">
      <div className="container text-center">
        <h3 className="quick-links-title">Connect With Me</h3>
        <div className="quick-links-container d-flex justify-content-center flex-wrap gap-4 mt-3">
          {links.map((link, index) => (
            <a
              className="quick-link pop-up"
              key={index}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
