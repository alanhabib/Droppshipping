import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/StarBorder";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Product from "./Product";
import { withStyles } from "@material-ui/core/styles";
import Title from "./Title";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";
import { Slide } from "@material-ui/core";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

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
    // display: "block",
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
    position: "relative"
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2)
  },
  cardContainer: {
    display: "flex"
  },
  footer: {
    backgroundColor: "white",
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: theme.spacing(6, 0),
    position: "absolute",
    width: "100%",
    bottom: 0,
    textAlign: "center"
  }
});

const footers = [
  {
    title: "Company",
    description: ["Team", "History", "Contact us", "Locations"]
  },
  {
    title: "Features",
    description: [
      "Cool stuff",
      "Random feature",
      "Team feature",
      "Developer stuff",
      "Another one"
    ]
  },
  {
    title: "Resources",
    description: [
      "Resource",
      "Resource name",
      "Another resource",
      "Final resource"
    ]
  },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"]
  }
];

class ProductList extends Component {
  render() {
    const image = require("../../public/img/product-1.png");
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {/* Hero unit */}
        <Container
          maxWidth="sm"
          component="main"
          className={classes.heroContent}
        >
          <Typography
            component="h1"
            variant="h4"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            <Title name="Our" title="Products" />
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            component="p"
          >
            Quickly build an effective pricing table for your potential
            customers with this layout. It&apos;s built with default Material-UI
            components with little customization.
          </Typography>
        </Container>
        {/* End hero unit */}
        <div style={{ display: "flex" }}>
          <ProductConsumer>
            {value => {
              return value.products.map(product => {
                console.log("product", product);
                return (
                  <Product
                    key={product.id}
                    price={product.price}
                    inCart={product.inCart}
                    img={product.img}
                    id={product.id}
                    title={product.title}
                  />
                );
              });
            }}
          </ProductConsumer>
        </div>
        {/* Footer */}
        <footer className={classes.footer}>
          <Container maxWidth="sm">
            <Grid container spacing={0} justify="space-evenly">
              {footers.map(footer => (
                <Grid item xs={6} sm={3} key={footer.title}>
                  <Typography variant="h6" color="textPrimary">
                    {footer.title}
                  </Typography>
                  <ul>
                    {footer.description.map(item => (
                      <li key={item}>
                        <Link
                          href="#"
                          variant="subtitle1"
                          color="textSecondary"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Grid>
              ))}
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </Container>
        </footer>
        {/* End footer */}
      </div>
    );
  }
}

export default withStyles(styles)(ProductList);
