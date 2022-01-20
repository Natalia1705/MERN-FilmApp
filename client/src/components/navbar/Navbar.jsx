import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import React, { useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [isScrolled, setScrolled] = useState(false);

  window.onscroll = () => {
    setScrolled(window.pageYOffset === 0 ? false : true);
    return () => window.onscroll == null;
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <dic className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
            alt="logo film"
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>Mi list</span>
        </dic>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img
            src="https://thumbs.dreamstime.com/b/user-icon-vector-people-profile-person-illustration-business-users-group-symbol-male-195160429.jpg"
            alt="people-icon"
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Setting</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
