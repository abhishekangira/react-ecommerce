import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/utils";
import { connect } from "react-redux";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.styles.scss";

class Header extends React.Component {
  render() {
    let displayName = null;
    if (this.props.currentUser)
      displayName = this.props.currentUser.displayName;
    else if (this.props.currentUser === "") {
      displayName = "not set";
    }
    return (
      <div className="header">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        {displayName !== "not set" && (
          <div className="options fade">
            {displayName && <span>Hi {displayName}!</span>}
            <Link className="option" to="/shop">
              SHOP
            </Link>
            <Link className="option" to="/">
              CONTACT
            </Link>
            {displayName ? (
              <Link className="option" to="#" onClick={() => auth.signOut()}>
                SIGN OUT
              </Link>
            ) : (
              <Link className="option" to="/signin">
                SIGN IN {displayName}
              </Link>
            )}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ currentUser: state.user.currentUser });

export default connect(mapStateToProps)(Header);
