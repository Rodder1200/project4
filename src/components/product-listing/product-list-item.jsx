import React from "react";
import { Link } from "react-router-dom";

export default function ProductListItem(props) {
  const baseUrl = process.env.PUBLIC_URL;
  return (
    <div className="product card col-md-5 m-3 p-2">
      <img
        className="card-img-top"
        src={props.product.image}
        alt={props.product.title}
      />
      <div className="card-body">
        <h4 className="card-title"> {props.product.title} </h4>
        <p className="card-text"> {props.product.description} </p>
        <h6 className="card-footer text-center"> ${props.product.price} </h6>
      </div>
      <div className="d-flex justify-content-between">
        <div>
          <Link
            to={{
              pathname: baseUrl + "/single_" + props.product.name,
              state: { ...props.product }
            }}
          >
            <button className="btn btn-info">More details</button>
          </Link>
        </div>
        <div>
          <button className="btn btn-lg btn-success">Buy</button>
        </div>
      </div>
    </div>
  );
}
