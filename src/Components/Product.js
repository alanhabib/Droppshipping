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

const styles = theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white,
      position: "relative"
    },
    ul: {
      margin: 0,
      padding: 0
    },
    li: {
      listStyle: "none"
    }
  },
  root: {
    display: "block",
    minHeight: "100vh",
    position: "relative"
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    flexWrap: "wrap"
  },
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5)
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6)
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
    position: "relative",
    width: "100%"
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 18
  },
  container: {
    flexGrow: 1
  },
  footer: {
    // padding: theme.spacing(2),
    // marginTop: "auto",
    backgroundColor: "white",
    borderTop: `1px solid ${theme.palette.divider}`,
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
    position: "absolute",
    width: "100%",
    bottom: 0,
    textAlign: "center"
    // paddingTop: theme.spacing(3),
    // paddingBottom: theme.spacing(3),
    // [theme.breakpoints.up("sm")]: {
    //   paddingTop: theme.spacing(6),
    //   paddingBottom: theme.spacing(6)
    // }
  }
});

class Product extends Component {
  render() {
    const { classes } = this.props;
    const image = require("../../public/img/product-1.png");
    const { id, title, img, price, inCart } = this.props;
    return (
      <ProductWrapper>
        {/* <Container
          spacing={6}
          className={classes.container}
          maxWidth="xs"
          component="main"
        > */}
        <Card className="card">
          <ProductConsumer>
            {value => (
              <CardContent
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
                  {inCart ? (
                    <p disabled>"in Cart"</p>
                  ) : (
                    <Grid item xs={8}>
                      <AddShoppingCartIcon />
                    </Grid>
                  )}
                </button>
              </CardContent>
            )}
          </ProductConsumer>

          <div className={classNames(classes.cardPricing, "card-footer")}>
            <p>{title}</p>
            <p style={{ display: "flex" }}>
              <span>
                <EuroSymbolIcon />
              </span>
              {price}
            </p>
          </div>
        </Card>
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
    border-color: transparent;
    transition: all 1s linear;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: space-between;
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
`;

export default withStyles(styles)(Product);
