import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { List } from "../components/List.jsx";
import { Card } from "../components/Card.jsx";
import { Controls } from "../components/Controls.jsx";
import { ALL_COUNTRIES } from "../config.js";

export const HomePage = () => {
  const [countries, setCountries] = useState([]);

  const navigate = useNavigate();

  let location = useLocation();
  console.log("HomePage" + location.pathname);

  // console.log(countries);

  useEffect(() => {
    axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
  }, []);

  const handleClick = (c) => {
    navigate(/country/`${encodeURIComponent(c.name.com)}`);
  };

  return (
    <>
      <Controls />
      <List>
        {countries.map((c) => {
          const countryInfo = {
            img: c.flags.png,
            name: c.name.common,
            info: [
              {
                title: "Population",
                description: c.population.toLocaleString(),
              },
              {
                title: "Region",
                description: c.region,
              },
              {
                title: "Capital",
                description: c.capital,
              },
            ],
          };

          return (
            <Card
              key={c.name.common}
              onClick={() => handleClick(c)}
              {...countryInfo}
            />
          );
        })}
      </List>
    </>
  );
};
