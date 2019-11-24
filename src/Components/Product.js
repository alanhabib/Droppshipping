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
      <ProductWrapper>
        <ProductConsumer>
          {value => (
            <div
              onClick={() => value.handleDetail(id)}
              className={classNames("img-container", "card")}
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
        {/* </Container> */}
      </ProductWrapper>
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

const ProductWrapper = styled.div`
  .card {
    flex: 0 1 calc(25% - 1em);
    box-sizing: border-box;
    // margin: 1rem 0.25em;
    // border-color: transparent;
    // transition: all 1s linear;
    // display: flex;
    // flex-direction: row;
    // flex-wrap: wrap;
    // justify-content: center;
    // align-content: space-between;
    margin: 10px;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-content: space-between;
    padding: 0 10px;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
    width: 100%;
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem;
    background: lightblue;
    color: white;
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%);
    transition: all 1s linear;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: blue;
  }
  @media screen and (min-width: 40em) {
    .card {
      flex: 0 1 calc(50% - 1em);
    }
  }
  @media screen and (min-width: 60em) {
    .card {
      flex: 0 1 calc(25% - 1em);
    }
  }
`;

export default Product;
