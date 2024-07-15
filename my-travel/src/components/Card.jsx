import React from "react";

export default function Card(props) {
  console.log(props);

  return (
    <div className="card">
      <img src={props.imageUrl} className="card--image" />
      <div className="about">
        <div className="where">
          <img src="src/assets/marker.png" className="location--icon" />
          <div className="location">{props.location.toUpperCase()}</div>
          <div className="link">
            <a href={props.googleMapsUrl}>View on Google Maps</a>
          </div>
        </div>
        <p className="title">{props.title}</p>
        <p className="bold">
          {props.startDate} - {props.endDate}
        </p>
        <p className="description">{props.description}</p>
      </div>{" "}
    </div>
  );
}
