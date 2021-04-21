import { useEffect } from "react";
import { withRouter } from "react-router";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import SHOP_DATA from "../../data/shop.data";
import "./collection.styles.scss";

const CategoryPage = ({ match }) => {
  const collection = SHOP_DATA[match.params.category];

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, []);

  return (
    <div className="category-page fade">
      <CollectionPreview {...collection} />
    </div>
  );
};

export default withRouter(CategoryPage);
