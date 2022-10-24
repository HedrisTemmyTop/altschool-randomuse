import React from "react";
import classes from "../styles/Contact.module.css";
const Contact = () => {
  return (
    <div className={classes.Contact}>
      <h2 className={classes.Contact__Head}>Contact</h2>

      <div className={classes.ContactContent}>
        You can contact us from the following platforms:
        <br />
        <br />
        <div>
          Linkedln:
          <a href="https://www.linkedin.com/in/idris-babalola-171918223/">
            https://www.linkedin.com/in/hedristemmytop
          </a>
        </div>
        <div className={classes.Links}>
          Twitter:
          <a href="https://www.twitter.com/HedrisTemmyTop">
            https://www.twitter.com/HedrisTemmyTop
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
