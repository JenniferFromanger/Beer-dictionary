import React from "react";

export default function Abvs(props) {
  return (
    <div className="all">
      <div>
        <div className="card">
          <img src={props.image_url} alt={props.name}></img>
          <div className="text">
            <div className="general">
              <h3>{props.name}</h3>
              <p>{props.description}</p>
              <div className="inline">
                <p>
                  <em>abv: </em>
                  {props.abv}
                </p>
                <p>
                  <em>ibu: </em>
                  {props.ibu}
                </p>
              </div>
            </div>
            <div className="details">
              <h4>Manufacturing Parameters</h4>
              <h5>Ingredients</h5>
              <p>
                <em>Malts: </em>
                {props.ingredients.malt.map((malt, i) => (
                  <span key={i}>{malt.name}</span>
                ))}
              </p>
              <p>
                <em>Hops: </em>
                {props.ingredients.hops.map((hops, i) => (
                  <span key={i}>{hops.name}</span>
                ))}
              </p>
              <p>
                <em>Yeast: </em>
                {props.ingredients.yeast}
              </p>
              <p>
                <em>Brewers tips: </em>
                {props.brewers_tips}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
