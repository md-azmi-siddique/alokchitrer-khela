import React from "react";
import logo from "../../Assets/logo.jpg";
import "../Header/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img src={logo} alt="" />
      </div>

      <div className="search-box">
        <input type="text" placeholder="Search..." />
      </div>

      <div className="createAccount">
        <div className="userAccountIcon">
          <h2>
            <FontAwesomeIcon icon={faUser} />
          </h2>
        </div>
        <div className="userAccountName">
          <h2>My Account</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
