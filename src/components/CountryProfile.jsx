import React from "react";
import { Link, useLocation } from "react-router-dom";

const CountryProfile = (props) => {
  const location = useLocation();
  const countriesData = props.countriesData;
  const currentCountry = countriesData.filter(
    (country) => country.alpha3Code.toLowerCase() === location.pathname.slice(1)
  )[0];
  const borderCountries = props.countriesData.filter((country) =>
    currentCountry.borders.includes(country.alpha3Code)
  );

  const getCurrencies = () => {
    return currentCountry.currencies.map((currency) => currency.name).join(", ");
  };

  const getLanguages = () => {
    return currentCountry.languages.map((language) => language.name).join(", ");
  };

  const getBorderCountries = () => {
    return borderCountries.map((country) =>
      <Link key={country.name} to={country.alpha3Code.toLowerCase()}>
        {country.name}
      </Link>);
  };

  return (
    <main key={currentCountry.alpha3Code} className="country-profile">
      <Link to="/" className="back flex-vertical-center">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="call-made">
            <path
              id="Shape"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.81802 3.6967L6.87868 4.75736L3.3785 8.25754H16.7428L16.7428 9.74246H3.3785L6.87868 13.2426L5.81802 14.3033L0.514719 9L5.81802 3.6967Z"
            />
          </g>
        </svg>
        Back
      </Link>
      <br />
      <section className="grid-profile">
        <img
          src={currentCountry.flags.svg}
          alt={`Flag of ${currentCountry.name}`}
          className="flag"
        />
        <div className="country-info">
          <div className="grid-info-desktop">
            <h2>{currentCountry.name}</h2>
            <ul className="profile-1">
              <li>
                <span>Native name:</span> {currentCountry.nativeName}
              </li>
              <li>
                <span>Population:</span> {currentCountry.population}
              </li>
              <li>
                <span>Region:</span> {currentCountry.region}
              </li>
              <li>
                <span>Sub Region:</span> {currentCountry.subregion}
              </li>
              <li>
                <span>Capital:</span> {currentCountry.capital}
              </li>
            </ul>
            <ul className="profile-2">
              <li>
                <span>Top Level Domain:</span> {currentCountry.topLevelDomain}
              </li>
              <li>
                <span>Currencies:</span> {getCurrencies()}
              </li>
              <li>
                <span>Languages:</span> {getLanguages()}
              </li>
            </ul>
          </div>
          <div className="border-countries">
            <p>Border countries:</p>
            <div className="flex-borders">{getBorderCountries()}</div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CountryProfile;
