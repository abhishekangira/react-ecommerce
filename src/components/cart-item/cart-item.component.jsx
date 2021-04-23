import "./cart-item.styles.scss";

import { getItem } from "../../data/shop.data";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/cart/cart.actions";

const CartItem = ({ id, qty, checkout, dispatch }) => {
  const { imageUrl, name, price } = getItem(id);
  return (
    <div className="cart-item fade">
      <div className={`cart-item-image ${checkout ? "cart-item-image-checkout" : ""}`}>
        <img src={imageUrl} alt={name} />
      </div>
      <div
        className={`cart-details ${checkout ? "cart-details-checkout" : "cart-details-dropdown"}`}
      >
        <span className="cart-details-name">{name}</span>
        <span className="cart-details-qty-price">
          {qty} x ${price}
        </span>
        {checkout && (
          <>
            <span className="item-total-price">${qty * price}</span>
            <span className="item-add" onClick={() => dispatch(addToCart(id))}>
              &uarr;
            </span>
            <span className="item-delete" onClick={() => dispatch(removeFromCart(id))}>
              &darr;
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default connect()(CartItem);
