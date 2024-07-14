import React from "react";

export default function Card(props) {
  // console.log(props);
  return (
    <div className="card">
      <img src={`src/images/${props.img}`} className="card--image" />
      <div className="card--stats">
        <img className="star" src="src/assets/star.png" alt="" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
