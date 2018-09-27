import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import ProductListing from "../components/product-listing";

function mainPage(props) {
  const baseUrl = process.env.PUBLIC_URL;
  return (
    <div className="container">
      <Link
        to={{
          pathname: baseUrl + "/create",
          state: { ...props.data },
          addNewProduct: props.addNewProduct
        }}
      >
        <button className="btn btn-warning alert-warning">
          Create New Product
        </button>
      </Link>
      <div className="row justify-content-between">
        <ProductListing products={props.data} />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    data: state.products
  };
}

export default connect(
  mapStateToProps,
  null
)(mainPage);
