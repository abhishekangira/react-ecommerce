import React, { Component } from "react";
import CustomButton from "../custom-button/custom-button.component";

import "./cart-dropdown.scss";

export default class CartDropdown extends Component {
  render() {
    return (
      <div className="cart-dropdown">
        <div className="cart-items"></div>
        <CustomButton inverted>Go To Checkout</CustomButton>
      </div>
    );
  }
}
