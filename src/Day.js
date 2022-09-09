import React from "react";
import "./Day.css";

export default function Day(props) {
  function whatDay() {
    let date = new Date(props.data.dt * 1000);
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
            src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
            alt="pic"
            className="forecast-icon"
          />
        </div>
        <div className="col-5 temp">
          <span>{Math.round(props.data.temp.min)}°</span> /{" "}
          <span>{Math.round(props.data.temp.max)}°</span>
        </div>
      </div>
    </div>
  );
}
