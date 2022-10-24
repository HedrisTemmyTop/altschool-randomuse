import React from "react";
import classes from "../styles/Users.module.css";
import image from "../assets/background.jpg";

const User = ({ users, loading }) => {
  const [user] = users;
  let content = <div>Loading....</div>;
  if (!loading) {
    content = (
      <div>
        <div className={classes.Card}>
          <h1 className={classes.Name}>
            {user.name.title} {user.name.first} {user.name.last}
          </h1>
          <img
            src={user.picture.large}
            alt="user image"
            className={classes.UserImage}
          />
          <div className={classes.About}>
            <h3>Country </h3>
            <p>{user.location.country}</p>
          </div>
          <div className={classes.About}>
            <h3>Location : </h3>
            <p>{user.location.city}</p>
          </div>
          <div className={classes.About}>
            <h3>Contact : </h3>
            <p>{user.phone}</p>
          </div>
          <div className={classes.About}>
            <h3>G-mail: </h3>
            <p>{user.email}</p>
          </div>
          <div className={classes.About}>
            <h3>AGe : </h3>
            <p>{user.registered.age} years old</p>
          </div>
          <div className={classes.About}>
            <h3>Gender: </h3>
            <p>{user.gender}</p>
          </div>
        </div>
      </div>
    );
  }
  return <div>{content}</div>;
};

export default User;
