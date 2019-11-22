import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function CartTotals({ value }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="column">
            <Link to="/">
              <button className="btn" type="button" onClick={() => clearCart()}>
                clear cart
              </button>
            </Link>
            <h1>
              <span>tax:</span>
              <strong>${cartTax}</strong>
            </h1>
            <h1>
              <span>tax:</span>
              <strong>${cartSubTotal}</strong>
            </h1>
            <h1>
              <span>total:</span>
              <strong>${cartTotal}</strong>
            </h1>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
