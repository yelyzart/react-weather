import React, { useState, useEffect } from "react";
import axios from "axios";
import Day from "./Day";
import "./Forecast.css";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function displayForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  if (loaded) {
    return (
      <div className="Forecast">
        <div>
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="information" key={index}>
                  <Day data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=7462c8bafebf7d5e231ed68152a3e97e&units=metric`;
    axios.get(url).then(displayForecast);

    return null;
  }
}
