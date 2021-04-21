import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/cart.actions";
import CustomButton from "../custom-button/custom-button.component";

import "./collection-item.styles.scss";

const CollectionItem = ({ id, name, price, imageUrl, addToCart }) => (
  <div className="collection-item">
    <div className="collection-item-image">
      <img src={imageUrl} alt={name} />
    </div>
    <CustomButton inverted={1} onClick={() => addToCart(id)}>
      add to cart
    </CustomButton>
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">${price}</span>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  addToCart: (id) => dispatch(addToCart(id)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
