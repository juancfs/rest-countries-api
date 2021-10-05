import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./scss/_main.scss";
import Header from "./Header";
import Home from "./Home";
import CountryProfile from "./CountryProfile";

// Check initial theme preference from the user
const checkTheme = () => {
  const userPrefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const userPrefersLight =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches;

  if (localStorage.getItem("theme")) {
    return localStorage.getItem("theme");
  } else if (userPrefersLight) {
    return "light";
  } else if (userPrefersDark) {
    return "dark";
  } else {
    return "light";
  }
};

const App = () => {
  const [theme, setTheme] = useState(checkTheme());
  const [countriesList, setCountriesList] = useState([]);
  const [filteredCountriesList, setFilteredCountriesList] = useState([]);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v2/all?fields=name,capital,currencies,nativeName,population,topLevelDomain,languages,borders,flags,region,subregion,alpha3Code"
    )
      .then((data) => data.json())
      .then((list) => {
        setCountriesList(list);
        setFilteredCountriesList(list);
      });
  }, []);

  // Set local storage to selected theme
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme])

  function onThemeToggle() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  const onFilter = () => {
    const [search, region] = [
      document.querySelector("#textField").value.toLowerCase(),
      document.querySelector("#region").value,
    ];

    // If no region is specified
    if (region === "All") {
      setFilteredCountriesList(
        countriesList.filter((country) =>
          country.name.toLowerCase().includes(search)
        )
      );
    } else {
      // If name field has content
      if (search.length > 0) {
        setFilteredCountriesList(
          countriesList.filter(
            (country) =>
              country.name.toLowerCase().includes(search) &&
              country.region === region
          )
        );
      } else {
        setFilteredCountriesList(
          countriesList.filter((country) => country.region === region)
        );
      }
    }
  };

  return (
    <div className={`app ${theme}`}>
      <BrowserRouter>
        <Header onThemeToggle={onThemeToggle}/>
        <Switch>
        <Route exact path="/">
          <Home countriesData={filteredCountriesList} onFilter={onFilter} />
        </Route>
        {countriesList.map(country => {
          return (
            <Route
              key={country.name}
              path={`/${country.alpha3Code.toLowerCase()}`}
            >
              <CountryProfile
              countriesData={countriesList}
              />
            </Route>
          );
        })}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
