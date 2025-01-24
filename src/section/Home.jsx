import React from "react";
import image from "../assets/Aryan.jpg";
import "./home.css";

function Home() {
  return (
    <>
      {/* Hero section start */}
      <section id="home" className="hero-section py-5">
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col-md-5">
              <br />
              <img
                src={image}
                alt="Your Picture"
                className="img-fluid rounded-circle shadow-lg profile-img"
              />
            </div>
            <div className="col-md-7">
              <h1 className="display-4 profile-name">Aryan Lokhande</h1>
              <h4 className="hero-tagline">
                IT Student | 5&nbsp;
                <i className="fa-solid fa-star" style={{ color: "#ffcc00" }}></i>&nbsp;
                HackerRank | MERN Stack Developer | Open Source Contributor
              </h4>
              <p className="hero-desc mt-3">
                Fuelled by coffee, code, and curiosity.
              </p>
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
            I am a passionate and dedicated IT student, with a strong foundation
            in problem-solving and software development. Proficient in C++ for
            Data Structures and Algorithms, I have honed my skills by solving
            challenges on platforms like LeetCode & HackerRank. I actively
            participate in hackathons and enjoy working collaboratively on
            innovative projects. Also secured the prestigious 2nd&nbsp;
            <i className="fa-solid fa-medal medal"></i> position in College
            Tech Fest. Currently, I am preparing for GSoC as my Open Source
            Contributor goal. My technical toolkit includes expertise in the
            MERN stack, JavaScript, and machine learning, reflecting my
            enthusiasm for building impactful solutions.
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