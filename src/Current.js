import React from "react";
import Temp from "./Temp";
import Time from "./Time";
import "./Current.css";

export default function Current(props) {
  return (
    <div className="Current">
      <h1>
        <img src={props.data.icon} alt="" className="weather-icon" />
        <Temp celsius={props.data.temperature} />
      </h1>
      <h2>
        <span>{props.data.city}</span>
        {", "}
        <span>{props.data.country}</span>
      </h2>
      <h3>
        <Time date={props.data.date} />
      </h3>
      <h4 className="description">{props.data.description}</h4>
      <h4>{props.data.humidity}</h4>
      <h4>{props.data.wind}</h4>
    </div>
  );
}
