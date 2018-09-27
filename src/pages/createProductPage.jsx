import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { default as UUID } from "uuid";

class createProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      image: "",
      title: "",
      description: "",
      specs: "",
      price: "",
      redirect: false,
      newProduct: true
    };
    this.addImage = this.addImage.bind(this);
    this.enterTitle = this.enterTitle.bind(this);
    this.enterPrice = this.enterPrice.bind(this);
    this.enterDescr = this.enterDescr.bind(this);
    this.enterSpecs = this.enterSpecs.bind(this);
    this.submit = this.submit.bind(this);
  }

  addImage(event) {
    const value = event.target.value;
    const fileName = value.substr(value.lastIndexOf("\\") + 1);
    const name = fileName.slice(0, fileName.indexOf("."));
    const unicId = UUID.v4();
    const img = new Image();
    const file = event.target.files[0];

    this.setState({
      name: name,
      id: unicId
    });

    img.src = window.URL.createObjectURL(file);
    img.onload = () => {
      if (file.size < 5242880) {
        this.setState({ image: img.src });
      }
    };
  }

  componentDidMount() {
    const data = this.props.location.state.data;
    if (data) {
      this.setState({
        id: data.id,
        name: data.name,
        image: "",
        title: data.title,
        description: data.description,
        specs: data.specs,
        price: data.price,
        newProduct: false
      });
    }
  }
  enterTitle(event) {
    this.setState({
      title: event.target.value
    });
  }

  enterPrice(event) {
    this.setState({
      price: event.target.value
    });
  }

  enterDescr(event) {
    this.setState({
      description: event.target.value
    });
  }

  enterSpecs(event) {
    this.setState({
      specs: event.target.value
    });
  }

  submit(event) {
    const data = this.props.location.state.data;

    event.preventDefault();
    if (this.state.newProduct) {
      this.props.addNewProduct(this.state);
    } else {
      this.props.removeProduct(data);
      this.props.addNewProduct(this.state);
    }
    this.setState({ redirect: true });
  }

  render() {
    const baseUrl = process.env.PUBLIC_URL;
    if (this.state.redirect) {
      return <Redirect push to={baseUrl + "/"} />;
    }
    return (
      <React.Fragment>
        <Link to={baseUrl + "/"}>
          <button className="btn btn-info">Back</button>
        </Link>
        <div className="jumbotron">
          <div className="container">
            <h2 className="page-header text-center">Add new product</h2>
            <form onSubmit={this.submit}>
              <div className="form-group">
                <label htmlFor="photo" className="form-check-label">
                  {" "}
                  Image{" "}
                </label>
                <input
                  id="image"
                  className="form-control"
                  type="file"
                  accept="image/*"
                  required
                  onChange={this.addImage}
                />
              </div>
              <div className="form-group">
                <label htmlFor="title" className="form-check-label">
                  Title
                </label>{" "}
                <input
                  id="title"
                  className="form-control"
                  type="text"
                  required
                  onChange={this.enterTitle}
                  value={this.state.title}
                />
              </div>
              <div className="form-group">
                <label htmlFor="price" className="form-check-label">
                  Price
                </label>{" "}
                <input
                  id="price"
                  className="form-control"
                  type="number"
                  required
                  onChange={this.enterPrice}
                  value={this.state.price}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description" className="form-check-label">
                  Short description
                </label>{" "}
                <input
                  id="description"
                  className="form-control"
                  type="text"
                  required
                  onChange={this.enterDescr}
                  value={this.state.description}
                />
              </div>
              <div className="form-group">
                <label htmlFor="specs" className="form-check-label">
                  Full specification
                </label>{" "}
                <textarea
                  id="specs"
                  className="form-control"
                  maxLength="500"
                  rows="10"
                  required
                  onChange={this.enterSpecs}
                  value={this.state.specs}
                />
              </div>
              <div className="text-center">
                <button className="btn btn-lg btn-success" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.newProduct
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addNewProduct: item => {
      dispatch({ type: "ADD_NEW_PRODUCT", payload: item });
    },
    removeProduct: item => {
      dispatch({ type: "REMOVE_PRODUCT", payload: item });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(createProductPage);
