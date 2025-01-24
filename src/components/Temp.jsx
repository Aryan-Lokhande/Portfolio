import React from "react";
import "./temp.css";

export default function Temp() {
  return (
    <div>
      <br />
      <div className="card minimalist-card">
        <h3>Minimalist Theme</h3>
        <p> 
          This is a clean, professional theme designed to emphasize content.
        </p>
        <button className="minimalist-btn">Learn More</button>
      </div>
      <br />
      {/* Gradient Vibrant Theme  */}
      <div className="card gradient-card">
        <h3>Vibrant Theme</h3>
        <p>This theme uses gradients to add energy and excitement.</p>
        <button className="gradient-btn">Learn More</button>
      </div>
      <br />
      {/* 3 no card  */}
      <div className="card material-card">
        <h3>Material Theme</h3>
        <p>This theme uses Google's Material Design principles.</p>
        <button className="material-btn">Learn More</button>
      </div>
      <br />

      <div className="card glass-card">
        <h3>Glassmorphism Theme</h3>
        <p>This theme uses frosted glass effects for a modern look.</p>
        <button className="glass-btn">Learn More</button>
      </div>
      <br />

      {/* no 5 card */}
      <div className="card techy-card">
        <h3>Techy Theme</h3>
        <p>
          This theme emphasizes a single monochrome base color for a futuristic
          feel.
        </p>
        <button className="techy-btn">Learn More</button>
      </div>
    </div>
  );
}
