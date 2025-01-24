import React from "react";
import "./home.css";

const achievementsData = [
  {
    title: "5-Star Rating on HackerRank",
    description:
      "Achieved a 5-star rating on HackerRank, demonstrating proficiency in problem-solving and coding.",
    icon: "fas fa-star",
    link: "https://www.hackerrank.com/profile/aryanlok619",
  },
  {
    title: "2nd Rank - Blind and Reverse Coding Hackathon",
    description:
      "Secured 2nd place in the Blind and Reverse Coding Hackathon during College Techfest.",
    icon: "fas fa-trophy",
  },
];

function Achievements() {
  return (
    <section id="achievements" className="achievements-section py-5">
      <div className="container">
        <h2 className="text-center mb-4 achievements-heading">
          My Achievements
        </h2>
        <div className="row justify-content-center">
          {achievementsData.map((achievement, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 text-center techy-card">
                <div className="card-body">
                  <i
                    className={`${achievement.icon} fa-3x mb-3 techy-icon`}
                  ></i>
                  <h5 className="card-title techy-card-title">
                    {achievement.title}
                  </h5>
                  <p className="card-text techy-card-text">
                    {achievement.description}
                  </p>
                  {achievement.link && (
                    <a
                      href={achievement.link}
                      className="btn techy-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn More
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
