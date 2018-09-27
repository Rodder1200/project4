import React, { Component } from "react";
import { Link } from "react-router-dom";

import ModalDelete from "../components/modal-delete/modal-delete";

class singleProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  render() {
    const data = this.props.location.state;
    const baseUrl = process.env.PUBLIC_URL;
    return (
      <div>
        <Link to={baseUrl + "/"}>
          <button className="btn btn-info">Back</button>
        </Link>
        <div className="card p-3 mh-100">
          <img className="card-img-top" src={data.image} alt={data.title} />
          <div className="card-body">
            <h5 className="card-title"> {data.title} </h5>
            <p className="card-text"> {data.specs} </p>
            <h3 className="card-footer text-center"> PRICE: ${data.price} </h3>
          </div>
          <div
            className="btn-group justify-content-end"
            role="group"
            aria-label="edit_delete"
          >
            <div>
              <Link
                to={{
                  pathname: baseUrl + "/create",
                  state: { data }
                }}
              >
                <button className="btn btn-sm btn-outline-warning">
                  {" "}
                  Edit{" "}
                </button>
              </Link>
            </div>

            <button
              className="btn btn-sm btn-outline-danger"
              onClick={() => this.setState({ show: true })}
            >
              {" "}
              Delete{" "}
            </button>
          </div>
        </div>
        {this.state.show ? (
          <ModalDelete
            product={this.props.location.state}
            onClose={() => this.setState({ show: false })}
          />
        ) : null}
      </div>
    );
  }
}

export default singleProductPage;
