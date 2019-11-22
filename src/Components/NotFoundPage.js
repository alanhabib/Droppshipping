import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NotFoundPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="column">
            <h1 className="display">404</h1>
            <h1>
              The requested URL
              <span style={{ color: "red" }}>
                {this.props.location.pathname}
              </span>{" "}
              was not found
            </h1>
            <h1>
              <Link to={"/"}>Go home</Link>
            </h1>
          </div>
        </div>
      </div>
    );
  }
}
