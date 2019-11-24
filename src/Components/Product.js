import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import EuroSymbolIcon from "@material-ui/icons/EuroSymbol";
import StarIcon from "@material-ui/icons/StarBorder";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import classNames from "classnames";
import Container from "@material-ui/core/Container";
import PropTypes from "prop-types";
import "./Product.scss";

class Product extends Component {
  render() {
    const image = require("../../public/img/product-1.png");
    const { id, title, img, price, inCart } = this.props;
    return (
      <div className="card">
        <ProductConsumer>
          {value => (
            <div
              onClick={() => value.handleDetail(id)}
              className="img-container"
            >
              <Link to="/details">
                <img
                  className="card-img-top"
                  style={{ width: "100%" }}
                  src={image}
                  alt={"product"}
                />
              </Link>
              <button
                className="cart-btn"
                onClick={() => {
                  value.addToCart(id);
                  value.openModal(id);
                }}
                disabled={inCart ? true : false}
              >
                {inCart ? <p disabled>"in Cart"</p> : <AddShoppingCartIcon />}
              </button>
            </div>
          )}
        </ProductConsumer>

        <div className="card-footer">
          <p>{title}</p>
          <p style={{ display: "flex" }}>
            <span>
              <EuroSymbolIcon />
            </span>
            {price}
          </p>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  //   product: PropTypes.shape({
  //     id: PropTypes.number,
  //     img: PropTypes.string,
  //     title: PropTypes.string,
  //     price: PropTypes.number,
  //     inCart: PropTypes.bool
  //   }).isRequired
};

export default Product;
