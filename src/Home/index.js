import React, { useEffect, useRef } from "react";
import GroupImg from "../assets/Group-1.png";
import TopImg from "../assets/topImg.png";
import "./index.css";

function HomePage() {

  return (
    <>
      <div className="container">
        <h1 className="headertitle1">FEATURES</h1>
        <h1 className="headertitle2">Why Carbon Crunch?</h1>
        <div className="features">
          <div className="feature-box">
            <img className="groupImg" src={GroupImg} alt="Group Image" />
            <h3 className="feature-title">Automated Data Collection</h3>
            <p>
              Our system automates carbon data collection, saving time and
              reducing errors, and ensuring accurate sustainability reporting.
            </p>
          </div>

          <div className="feature-box">
            <img className="groupImg" src={GroupImg} alt="Group Image" />
            <h3 className="feature-title">Monitoring & Reporting</h3>
            <p>
              Effortlessly track and report carbon emissions with automated
              monitoring, ensuring accuracy and compliance in sustainability
              reporting.
            </p>
          </div>
          <div className="feature-box">
            <img className="groupImg" src={GroupImg} alt="Group Image" />
            <h3 className="feature-title">Monitoring & Reporting</h3>
            <p>
              Effortlessly track and report carbon emissions with automated
              monitoring, ensuring accuracy and compliance in sustainability
              reporting.
            </p>
          </div>

          <div className="feature-box">
            <img className="groupImg" src={GroupImg} alt="Group Image" />
            <h3 className="feature-title">Simplified Certification Process</h3>
            <p>
              Streamline your certification process with our simplified,
              automated solution, reducing complexity and ensuring faster
              compliance.
            </p>
          </div>
          <div className="feature-box">
            <img className="groupImg" src={GroupImg} alt="Group Image" />
            <h3 className="feature-title">AI-Driven Insights</h3>
            <p>
              Leverage AI-driven insights to uncover hidden patterns, optimize
              sustainability strategies, and drive impactful decision-making.
            </p>
          </div>
          <div className="feature-box">
            <img className="groupImg" src={GroupImg} alt="Group Image" />
            <h3 className="feature-title">AI-Driven Insights</h3>
            <p>
              Leverage AI-driven insights to uncover hidden patterns, optimize
              sustainability strategies, and drive impactful decision-making.
            </p>
          </div>
        </div>
      </div>

      <div className="bottom-container">
        <img className="topImg" src={TopImg} alt="Image" />
        <div className="parentcontainer">
          <div className="container1">
            <h2>3x</h2>
            <p>ESG High Performers Deliver A Higher Total Shareholder Return</p>
          </div>

          <div className="container2">
            <h2>98%</h2>
            <p>Of CEOs Agree Sustainability Is Their Responsibility</p>
          </div>
          <div className="container3">
            <h2>18%</h2>
            <p>
              of Companies Are Cutting Emissions Fast Enough To Reach Net Zero
              By 2050
            </p>
          </div>
          <div className="container4">
            <h2>37%</h2>
            <p>
              Of The World's Largest Companies Have A Public Net Zero Target.
              Nearly All Are Off Track
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
