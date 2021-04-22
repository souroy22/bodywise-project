import React from "react";
import About from "../About/About";
import Description from "../Description/Description";
import LandingPage from "../Landing Page/LandingPage";
import Navbar from "../Navbar/Navbar";
import NewLaunch from "../NewLaunch/NewLaunch";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <div className="about-section1">
        <About />
      </div>
      <NewLaunch />
      <div className="about-section2">
        <About />
      </div>
      <Description />
    </div>
  );
};

export default Home;
