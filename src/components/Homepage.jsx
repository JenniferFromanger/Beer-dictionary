import React, { useState, useEffect } from "react";
import "./Homepage.scss";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Homepage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.punkapi.com/v2/beers?page=2&per_page=80")
      .then((res) => {
        setBeers(res.data);
        console.log(res.data);
      });
  }, []);

  return (
    <div className="home">
      <h2>Beer Dictionary</h2>
      <Link to="/BeerList">
        <button>Enter</button>
      </Link>
    </div>
  );
}
