import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PayPalButton from "./PayPalButton";

export default function CartTotals({ value, history }) {
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
            <PayPalButton
              total={cartTotal}
              clearCart={clearCart}
              history={history}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
