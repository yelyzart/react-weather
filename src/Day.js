import React from "react";
import "./Day.css";

export default function Day(props) {
  function whatDay() {
    let date = new Date(props.info.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="Day">
      <div className="row info">
        <div className="col-3 day">{whatDay()}</div>
        <div className="col-3 icon">
          <img
            src={props.info.weather[0].icon}
            alt="pic"
            className="forecast-icon"
          />
        </div>
        <div className="col-5 temp">
          <span>{Math.round(props.info.temp.min)}°</span> /{" "}
          <span>{Math.round(props.info.temp.max)}°</span>
        </div>
      </div>
    </div>
  );
}
