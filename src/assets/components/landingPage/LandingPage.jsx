import React from "react";

import classes from "./LandingPage.module.css";
import NavBar from "../NavBar/NavBar";
import Hero from "../Hero/Hero";
import WelcomeSection from "../Welcome/WelcomeSection";
import { ParallaxBanner } from "react-scroll-parallax";
const LandingPage = () => {
  return (
    <>
      <NavBar />

      <Hero />

      <WelcomeSection />
    </>
  );
};

export default LandingPage;
