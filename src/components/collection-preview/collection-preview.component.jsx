import { Link, withRouter } from "react-router-dom";
import CollectionItem from "../collection-item/collection-item.component";

import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items, routeName, totalItems }) => (
  <div className="collection-preview">
    <Link to={`/shop/${routeName}`}>
      <h1 className="title">{title.toUpperCase()}</h1>
    </Link>
    <div className="preview">
      {items.map(({ id, ...otherItemProps }, i) => {
        if (totalItems)
          return i < totalItems && <CollectionItem key={id} id={id} {...otherItemProps} />;
        return <CollectionItem key={id} id={id} {...otherItemProps} />;
      })}
    </div>
  </div>
);

export default withRouter(CollectionPreview);
