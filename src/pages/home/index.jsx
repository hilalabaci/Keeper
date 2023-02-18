import React from "react";
import Card from "../../components/card/card";
import "./index.css";
import details from "../../components/card/details";

const allDetails = (details) => (
  <Card
    key={details.id}
    color={details.color}
    text={details.text}
    date={details.date}
  />
);

const Home = () => (
  <div className="home-container">
    <div className="card-add-side">
      <p className="title-home">Keeper</p>
      <img
        className="plus-element"
        alt="plus element"
        src="/assets/emoji/plus.png"
      />
    </div>
    <div className="notes-side">
      <div>
        <input className="search-input" type="search" placeholder="Search.." />
      </div>
      <h1 className="home-title">Notes</h1>
      <div className="card-wrapper">{details.map(allDetails)}</div>
    </div>
  </div>
);
export default Home;
