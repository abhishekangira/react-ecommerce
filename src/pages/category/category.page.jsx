import { useEffect } from "react";
import { withRouter } from "react-router";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import SHOP_DATA from "../../data/shop.data";
import "./category.styles.scss";

const CategoryPage = ({ match }) => {
  let id;
  switch (match.params.category) {
    case "hats":
      id = 1;
      break;
    case "sneakers":
      id = 2;
      break;
    case "jackets":
      id = 3;
      break;
    case "womens":
      id = 4;
      break;
    case "mens":
      id = 5;
      break;
    default:
  }
  const collection = SHOP_DATA.find((category) => category.id === id);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, []);

  return (
    <div className="category-page fade">
      <CollectionPreview key={id} {...collection} />
    </div>
  );
};

export default withRouter(CategoryPage);
