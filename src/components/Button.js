import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

function Button() {
  return (
    <Link to="/contact">
      <button className="btn">
        Contact Us
        </button>
    </Link>
  );
}

export default Button;