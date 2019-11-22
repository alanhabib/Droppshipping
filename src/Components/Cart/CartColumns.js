import React from "react";

export default function CartColumns() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="column">
          <p className="upperCase"> products</p>
        </div>
        <div className="column">
          <p className="upperCase"> name of products</p>
        </div>
        <div className="column">
          <p className="upperCase"> price</p>
        </div>
        <div className="column">
          <p className="upperCase"> quantity</p>
        </div>
        <div className="column">
          <p className="upperCase"> remove</p>
        </div>
        <div className="column">
          <p className="upperCase"> total</p>
        </div>
      </div>
    </div>
  );
}
