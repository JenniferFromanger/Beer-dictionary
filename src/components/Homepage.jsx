import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.scss";

export default function Homepage() {
  return (
    <div className="home">
      <h2>Beer Dictionary</h2>
      <Link to="/beerslist/beer">
        <button>Enter</button>
      </Link>
    </div>
  );
}
