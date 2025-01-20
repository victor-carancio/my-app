import React from "react";
import Country from "../interfaces/Country";
import { Link } from "react-router-dom";

interface Props {
  country: Country;
}
const CountryItem = ({ country }: Props) => {
  const { name, population, region, capital, flag } = country;

  return (
    <div className="country-container-country">
      <Link to={`/country/${name}`} className="link-img">
        <img src={flag} alt={name} />
      </Link>

      <div className="info-container">
        <Link to={`/country/${name}`} className="link-title">
          <h2>{name}</h2>
        </Link>

        <p>
          Population: <span>{population.toLocaleString("en-US")}</span>
        </p>
        <p>
          Region: <span>{region}</span>
        </p>
        <p>
          Capital: <span>{capital}</span>
        </p>
      </div>
    </div>
  );
};

export default CountryItem;
