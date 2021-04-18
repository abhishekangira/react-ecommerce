import { connect } from "react-redux";
import { ReactComponent as CartIconLogo } from "../../assets/shopping-bag.svg";

import { toggleCartDropdownVisibility } from "../../redux/cart/cart.actions";

import "./cart-icon.styles.scss";

function CartIcon({ toggleCartDropdownVisibility, cartItems }) {
  const quantity = Object.values(cartItems).reduce((acc, val) => acc + +val, 0);
  return (
    <div className="cart-icon" onClick={toggleCartDropdownVisibility}>
      <CartIconLogo className="cart-icon-logo" />
      <span className="cart-icon-quantity">{quantity}</span>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropdownVisibility: () => dispatch(toggleCartDropdownVisibility()),
});

const mapStateToProps = ({ cart: { cartItems } }) => ({ cartItems });

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
