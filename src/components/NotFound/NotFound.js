import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NotFound.style.css";

class NotFound extends Component<void> {
  render() {
    return (
      <div className="notFound">
        <h2>The page you are looking for was not found.</h2>
        <p>
          ( Hint: try <Link to="/"> this one.</Link> ;-)
        </p>
      </div>
    );
  }
}

export default NotFound;