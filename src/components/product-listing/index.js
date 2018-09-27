import React from "react";

import ProductListItem from "../product-listing/product-list-item";

function ProductListing(props) {
  return (
    <React.Fragment>
      {props.products.map((product, index) => (
        <ProductListItem product={product} key={product.name + index} />
      ))}
    </React.Fragment>
  );
}

export default ProductListing;
