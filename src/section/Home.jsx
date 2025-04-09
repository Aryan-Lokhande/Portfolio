import React from "react";
import image from "../assets/Aryan.jpg";
import "./home.css";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);
  return (
    <>
      {/* Hero section start */}
      <section id="home" className="hero-section py-5">
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col-md-5" data-aos="fade-right" data-aos-delay="200">
              <br />
              <img
                src={image}
                alt="Your Picture"
                className="img-fluid rounded-circle shadow-lg profile-img"
              />
            </div>
            <div className="col-md-7" data-aos="fade-right" >
              <h1 className="display-4 profile-name">Aryan Lokhande</h1>
              <h4 className="hero-tagline">
                IT Student | 5&nbsp;
                <i className="fa-solid fa-star" style={{ color: "#ffcc00" }}></i>&nbsp;
                HackerRank | MERN Stack Developer | Open Source Contributor
              </h4>
              <div className="hero-desc mt-3">
                Fuelled by coffee, code, and curiosity.
              </div>
              <a href="#about" className="btn techy-btn mt-3">
                Explore More
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Hero section end */}

      {/* Introduction section start */}
      <section id="about" className="introduction-section py-5">
        <div className="container text-center">
          <h4 className="intro-heading">&lt;Hello World/&gt;</h4>
          <h2 className="intro-title">Welcome to My Portfolio</h2>
          <p className="intro-desc">
  I am a passionate and dedicated IT student with a strong foundation in problem-solving and software development. Proficient in C++ for Data Structures and Algorithms, I have honed my skills by solving challenges on platforms like <b>LeetCode</b> and <b>HackerRank</b>. I actively participate in hackathons and competitive coding contests, securing the prestigious 1st&nbsp;
  <i className="fa-solid fa-trophy gold-medal"></i> position in <b>Code. Compete. Conquer.</b> hosted by GDGOC at AISSMS COE, and the 2nd&nbsp;
  <i className="fa-solid fa-medal medal"></i> position in our Sinhgad College Tech Fest <b>TECHTONIC</b>. Currently, I am preparing for <b>GSoC</b> as my open-source contributor goal. My technical toolkit includes expertise in the <b>MERN stack</b>, <b>JavaScript</b>, and <b>Machine Learning</b>, reflecting my enthusiasm for building impactful solutions.
</p>

          <a href="#projects" className="btn techy-outline-btn mt-3">
            View My Work
          </a>
        </div>
      </section>
      {/* Introduction section end */}
    </>
  );
}

export default Home;