import React, { Component } from "react";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";

import "./cart-dropdown.styles.scss";

class CartDropdown extends Component {
  render() {
    return (
      <div className="cart-dropdown">
        <div className="cart-items">
          {Object.keys(this.props.cartItems).map((id) => (
            <CartItem key={id} qty={this.props.cartItems[id]} id={+id} />
          ))}
        </div>
        <CustomButton inverted={1}>Go To Checkout</CustomButton>
      </div>
    );
  }
}

const mapStateToProps = ({ cart: { cartItems } }) => ({ cartItems });

export default connect(mapStateToProps)(CartDropdown);
