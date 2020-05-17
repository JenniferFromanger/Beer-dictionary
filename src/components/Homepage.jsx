import React from "react";
import "./Homepage.scss";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="home">
      <h2>Beer Dictionary</h2>
      <Link to="/beerslist">
        <button>Enter</button>
      </Link>
    </div>
  );
}
