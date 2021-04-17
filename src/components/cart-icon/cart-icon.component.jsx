import { connect } from "react-redux";
import { ReactComponent as CartIconLogo } from "../../assets/shopping-bag.svg";

import {toggleCartDropdownVisibility} from "../../redux/cart/cart.actions";

import "./cart-icon.styles.scss";

function CartIcon({ toggleCartDropdownVisibility }) {
  return (
    <div className="cart-icon" onClick={toggleCartDropdownVisibility}>
      <CartIconLogo className="cart-icon-logo" />
      <span className="cart-icon-quantity">6</span>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropdownVisibility: () => dispatch(toggleCartDropdownVisibility()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
