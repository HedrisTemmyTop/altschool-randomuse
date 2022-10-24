import React from "react";
import classes from "../styles/About.module.css";
const About = () => {
  return (
    <div className={classes.About}>
      <h2 className={classes.About__Head}>About</h2>

      <p className={classes.AboutContent}>
        I'm Hedris Temitope- a frontend engineer who developed a software that
        shows differed users' profile with a nice pagination button. Kindly
        navigate to users page to view magic tools:routes, nested routes, error
        boundary, axios, pagination
      </p>
    </div>
  );
};

export default About;
