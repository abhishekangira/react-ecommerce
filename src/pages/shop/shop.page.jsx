import React from "react";

import SHOP_DATA from "../../data/shop.data";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class ShopPage extends React.Component {
  state = {
    collections: SHOP_DATA,
  };

  render() {
    const { collections } = this.state;
    return (
      <div className="fade">
        {Object.values(collections).map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} totalItems={4} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
