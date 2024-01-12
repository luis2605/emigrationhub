import React from "react";
import classes from "./WelcomeSection.module.css";

const WelcomeSection = () => {
  return (
    <div className={classes["welcome-container"]}>
      <div className={classes["welcome-intro"]}>
        <h2>Embarking on a journey to a new chapter of your life?</h2>
        <h3>You're in the right place. </h3>
        <p>
          GlobalMoveHub is your go-to resource for navigating the exciting world
          of emigration. Whether you're considering a change for personal
          growth, career opportunities, or a fresh start, we're here to guide
          you every step of the way.
        </p>
      </div>
    </div>
  );
};

export default WelcomeSection;
