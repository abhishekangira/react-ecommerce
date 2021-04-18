import { Link } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";

import "./cart-dropdown.styles.scss";

import { toggleCartDropdownVisibility } from "../../redux/cart/cart.actions";

class CartDropdown extends Component {
  render() {
    return (
      <div className="cart-dropdown">
        <div className="cart-items">
          {Object.keys(this.props.cartItems).length ? (
            Object.keys(this.props.cartItems).map((id) => (
              <CartItem key={id} qty={this.props.cartItems[id]} id={+id} />
            ))
          ) : (
            <span>Your cart is empty.</span>
          )}
        </div>
        <Link className="checkout-btn" to="/checkout">
          <CustomButton
            inverted={1}
            onClick={() => this.props.dispatch(toggleCartDropdownVisibility())}
          >
            Go To Checkout
          </CustomButton>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = ({ cart: { cartItems } }) => ({ cartItems });

export default connect(mapStateToProps)(CartDropdown);
