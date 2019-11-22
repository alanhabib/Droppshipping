import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import { StylesContext } from "@material-ui/styles/StylesProvider";
import EuroSymbolIcon from "@material-ui/icons/EuroSymbol";
import { Button } from "@material-ui/core";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          console.log("detailproduct", value.detailProduct);
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;
          return (
            <div className="container">
              {/* title */}
              <div className="row">
                <h1>{title}</h1>
              </div>
              {/* end title */}
              {/* product info */}
              <div className="row">
                <div className="column">
                  <img src={img} alt="product"></img>
                </div>
                {/* product text */}
                <div className="column">
                  <h1>model: {title}</h1>
                  <h4 className="text-title">
                    made by: <span className="upperCase">{company}</span>
                  </h4>
                  <h4 className="textBlue">
                    price:
                    <span>
                      <EuroSymbolIcon />
                    </span>
                    {price}
                  </h4>
                  <p className="upperCase">some info about the product</p>
                  <p>{info}</p>
                  {/* Buttons */}
                  <div>
                    <Link to="/">
                      <ButtonContainer>Back to Products</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "inCart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
