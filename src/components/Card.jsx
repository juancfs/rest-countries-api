import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
    return (
        <article key={props.countryCard.name} className="card">
                  <Link to={`/${props.countryCard.alpha3Code.toLowerCase()}`}>
                    <img
                      src={props.countryCard.flags.svg}
                      alt={`Flag of ${props.countryCard.name}`}
                      loading="lazy"
                      className="flag"
                    />
                    <div className="card-content">
                      <h2 className="country-name">{props.countryCard.name}</h2>
                      <p>
                        <span className="fact-heading">Population:</span>{" "}
                        {props.countryCard.population}
                      </p>
                      <p>
                        <span className="fact-heading">Region:</span>{" "}
                        {props.countryCard.region}
                      </p>
                      <p>
                        <span className="fact-heading">Capital:</span>{" "}
                        {props.countryCard.capital}
                      </p>
                    </div>
                  </Link>
                </article>
    );
}

export default Card;