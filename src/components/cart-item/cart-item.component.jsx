import "./cart-item.styles.scss";

import ITEMS from "../../data/shop.data";

const getItem = (id) => {
  let foundItem;
  for (let category of ITEMS) {
    foundItem = category.items.find((item) => item.id === id);
    if (foundItem) return foundItem;
  }
  return "Item not found";
};

const CartItem = ({ id, qty }) => {
  const {imageUrl, name, price} =  getItem(id);
  return (
    <div className="cart-item fade">
      <img className="cart-item-image" src={imageUrl} alt={name} />
      <div className="cart-details">
        <span className="cart-details-name">{name}</span>
        <span className="cart-details-qty-price">
          {qty} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
