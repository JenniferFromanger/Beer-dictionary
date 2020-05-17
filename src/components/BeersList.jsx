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
                <p>{beer.description}</p>
                <div className="inline">
                  <p>
                    <em>abv: </em>
                    {beer.abv}
                  </p>
                  <p>
                    <em>ibu: </em>
                    {beer.ibu}
                  </p>
                </div>
              </div>
              <div className="details">
                <h4>Manufacturing Parameters</h4>
                <h5>Ingredients</h5>
                <p>
                  <em>Malts: </em>
                  {beer.ingredients.malt.map((malt, i) => (
                    <span key={i}>{malt.name}</span>
                  ))}
                </p>
                <p>
                  <em>Hops: </em>
                  {beer.ingredients.hops.map((hops, i) => (
                    <span key={i}>{hops.name}</span>
                  ))}
                </p>
                <p>
                  <em>Yeast: </em>
                  {beer.ingredients.yeast}
                </p>
                <p>
                  <em>Brewers tips: </em>
                  {beer.brewers_tips}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
