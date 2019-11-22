import React from "react";
import styled from "styled-components";
import DeleteIcon from "@material-ui/icons/Delete";

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <CartItemWrapper>
      <div className="row">
        <div className="column">
          <img
            src={img}
            style={{ width: "5rem", height: "5rem" }}
            className="img-fluid"
          />
        </div>
        <div className="column">
          <span>product: </span>
          {title}
        </div>
        <div className="column">
          <span>price: </span>
          {price}
        </div>
        <div className="column">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div>
              <span className="btn" onClick={() => decrement(id)}>
                -
              </span>
              <span className="btn">{count}</span>
              <span className="btn" onClick={() => increment(id)}>
                +
              </span>
            </div>
          </div>
        </div>
        <div className="column">
          <div onClick={() => removeItem(id)}>
            <DeleteIcon />
          </div>
        </div>
        <div className="column">
          <strong> item total: ${total}</strong>
        </div>
      </div>
    </CartItemWrapper>
  );
}

const CartItemWrapper = styled.span`
  .btn {
    background: transparent;
    text-transform: capitalize;
    font-size: 4rem;
    color: black;
    border-radius: 0;
    border: 0.1rem black solid;
    width: 40px;
    height: 40px;
    text-align: center;
    .btn:hover {
      background: #000;
      color: #fff;
    }
  }
`;
