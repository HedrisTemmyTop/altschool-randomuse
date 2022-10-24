import React from "react";
import { Link, Outlet } from "react-router-dom";
import classes from "../styles/Home.module.css";

const Home = () => {
  return (
    <div>
      <div className={classes.HomeContent}>
        <h2 className={classes.Main}>
          Hi,we give free random users on various platforms
        </h2>
        <div className={classes.Buttons}>
          <Link className={classes.BtnLink} to="/About">
            About us
          </Link>
          <Link to="contact" className={classes.BtnLink}>
            Contact us
          </Link>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
