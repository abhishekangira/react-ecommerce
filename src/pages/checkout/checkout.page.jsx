import { connect } from "react-redux";
import CartItem from "../../components/cart-item/cart-item.component";
import {getItem} from "../../data/shop.data";
import "./checkout.styles.scss";

const CheckoutPage = (props) => (
  <div className="checkout-page fade">
    <h1 className="title">Checkout</h1>
    <div className="checkout-items">
      {Object.keys(props.cartItems).length ? (
        Object.keys(props.cartItems).map((id) => (
          <CartItem key={id} checkout={1} qty={props.cartItems[id]} id={+id} />
        ))
      ) : (
        <span>Your cart is empty.</span>
      )}
    </div>
    <div className="cart-total-price">
      Total $
      {Object.keys(props.cartItems).length
        ? Object.keys(props.cartItems).reduce(
            (acc, id) => acc + props.cartItems[id] * getItem(+id).price,
            0
          )
        : 0}
    </div>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({ cartItems });

export default connect(mapStateToProps)(CheckoutPage);
