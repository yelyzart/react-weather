import React from "react";
import "./Day.css";

export default function Day(props) {
  return (
    <div className="Day">
      <div className="row info">
        <div className="col-3 day">MON</div>
        <div className="col-3 icon">
          <img src={props.data.weather[0].icon} alt="" width="50" />
        </div>
        <div className="col-5 temp">
          <span>{Math.round(props.data.temp.min)}°</span> /{" "}
          <span>{Math.round(props.data.temp.max)}°</span>
        </div>
      </div>
    </div>
  );
}
