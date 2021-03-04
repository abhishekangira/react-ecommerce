import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/utils";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.styles.scss";

const Header = ({ username }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      {username && <span>Hi {username}!</span>}
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/">
        CONTACT
      </Link>
      {username ? (
        <Link className="option" to="/" onClick={() => auth.signOut()}>
          SIGN OUT
        </Link>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN {username}
        </Link>
      )}
    </div>
  </div>
);

export default Header;
