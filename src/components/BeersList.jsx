import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import Abvs from "./Abvs";
import axios from "axios";
import Beer from "./Beer";
import "./BeersList.scss";

export default function BeersList() {
  const [beers, setBeers] = useState([]);
  const [filteredBeers, setFilteredBeers] = useState([]);
  const [filteredAbvs, setFilteredAbvs] = useState([]);
  const [search, setSearch] = useState("");
  const [abvs, setAbvs] = useState([]);
  const [active, setActive] = useState(false);

  useEffect(() => {
    axios
      .get("https://api.punkapi.com/v2/beers?page=2&per_page=80")
      .then((res) => {
        setBeers(res.data);
      });
  }, []);

  useEffect(() => {
    axios.get("https://api.punkapi.com/v2/beers?abv_gt=6").then((res) => {
      setAbvs(res.data);
    });
  }, []);

  useEffect(() => {
    setFilteredBeers(
      beers.filter((beer) =>
        beer.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, beers]);

  useEffect(() => {
    setFilteredAbvs(
      abvs.filter((abv) =>
        abv.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, abvs]);

  return (
    <div className="all">
      <h2>All Beers descriptions</h2>
      <div className="link">
        <Link to="/">
          <button>Homepage</button>
        </Link>
        {active ? (
          <Link to="/beerslist/beer">
            <button onClick={() => setActive(!active)}>All Abv</button>
          </Link>
        ) : (
          <Link to="/beerslist/abvs">
            <button onClick={() => setActive(!active)}>Abv over 6</button>
          </Link>
        )}
      </div>
      <input
        type="text"
        placeholder="Search by name"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Route path={`/beerslist/beer`}>
        {filteredBeers.map((beer) => (
          <Beer {...beer} key={beer.id} />
        ))}
      </Route>{" "}
      <Route path={`/beerslist/abvs`}>
        {filteredAbvs.map((abv) => (
          <Abvs {...abv} key={abv.id} />
        ))}
      </Route>
    </div>
  );
}
