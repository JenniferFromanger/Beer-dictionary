import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./BeersList.scss";

export default function BeersList() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.punkapi.com/v2/beers?page=2&per_page=80")
      .then((res) => {
        setBeers(res.data);
      });
  }, []);

  return (
    <div className="all">
      <h2>All Beers descriptions</h2>
      <Link to="/">
        <button>Homepage</button>
      </Link>
      {beers.map((beer) => (
        <div key={beer.id}>
          <div className="card">
            <img src={beer.image_url} alt={beer.name}></img>
            <div className="text">
              <div className="general">
                <h3>{beer.name}</h3>
                <h4>{beer.description}</h4>
                <p>abv: {beer.abv}</p>
                <p>ibu: {beer.ibu}</p>
              </div>
              <div className="details">
                <h4>Manufacturing Parameters</h4>
                <h5>Ingredients</h5>
                <p>
                  Malts:{" "}
                  {beer.ingredients.malt.map((malt, i) => (
                    <span key={i}>{malt.name}</span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
