import React, { useState } from "react";
import "./Temp.css";

export default function Temp(props) {
  const [temperature, showTemperature] = useState("celsius");

  function showCelsius(event) {
    event.preventDefault();
    showTemperature("celsius");
  }
  function showFahrenheit(event) {
    event.preventDefault();
    showTemperature("fahrenheit");
  }
  if (temperature === "celsius") {
    return (
      <div className="Temp">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <sup>
          <a href="/" className="celsius">
            °C{" "}
          </a>
          |
          <a href="/" className="fahrenheit" onClick={showFahrenheit}>
            °F
          </a>
        </sup>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="Temp">
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <sup>
          <a href="/" className="celsius" onClick={showCelsius}>
            °C{" "}
          </a>
          |
          <a href="/" className="fahrenheit">
            °F
          </a>
        </sup>
      </div>
    );
  }
}
