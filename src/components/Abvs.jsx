import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Abvs() {
  const [abvs, setAbvs] = useState([]);

  useEffect(() => {
    axios.get("https://api.punkapi.com/v2/beers?abv_gt=6").then((res) => {
      setAbvs(res.data);
    });
  }, []);

  return (
    <div className="all">
      <h2>All Beers descriptions</h2>
      <div className="link">
        <Link to="/">
          <button>Homepage</button>
        </Link>
        <Link to="/beerslist">
          <button>All beers</button>
        </Link>
      </div>
      {abvs.map((abv) => (
        <div key={abv.id}>
          <div className="card">
            <img src={abv.image_url} alt={abv.name}></img>
            <div className="text">
              <div className="general">
                <h3>{abv.name}</h3>
                <p>{abv.description}</p>
                <div className="inline">
                  <p>
                    <em>abv: </em>
                    {abv.abv}
                  </p>
                  <p>
                    <em>ibu: </em>
                    {abv.ibu}
                  </p>
                </div>
              </div>
              <div className="details">
                <h4>Manufacturing Parameters</h4>
                <h5>Ingredients</h5>
                <p>
                  <em>Malts: </em>
                  {abv.ingredients.malt.map((malt, i) => (
                    <span key={i}>{malt.name}</span>
                  ))}
                </p>
                <p>
                  <em>Hops: </em>
                  {abv.ingredients.hops.map((hops, i) => (
                    <span key={i}>{hops.name}</span>
                  ))}
                </p>
                <p>
                  <em>Yeast: </em>
                  {abv.ingredients.yeast}
                </p>
                <p>
                  <em>Brewers tips: </em>
                  {abv.brewers_tips}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
