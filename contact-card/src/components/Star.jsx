/* eslint-disable react/prop-types */
// import React from "react"

export default function Star(props) {
  const starIcon = props.isFilled ? "star-filled.png" : "star-empty.png";

  return (
    <img
      src={`src/assets/${starIcon}`}
      className="card--favorite"
      onClick={props.handleClick}
      />
  );
}
