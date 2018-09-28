import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

class ModalDelete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete() {
    this.props.removeProduct(this.props.product);
    this.setState({ redirect: true });
  }

  render() {
    const { onClose } = this.props;
    const baseUrl = process.env.PUBLIC_URL;

    if (this.state.redirect) {
      return <Redirect push to={baseUrl + "/"} />;
    }
    return (
      <div className="modal modal-show">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Delete product</h5>
              <button
                type="button"
                className="close"
                aria-label="Close"
                onClick={() => onClose()}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body">
              <p>Are you sure?</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.onDelete}
              >
                Yes
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => onClose()}
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    removeProduct: item => {
      dispatch({ type: "REMOVE_PRODUCT", payload: item });
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(ModalDelete);
