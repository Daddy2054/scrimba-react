import React from "react";

export default function Card (){
    return(
        <div className="card">
            <img className="card--image" src="src/assets/image1.png" alt="" />
            <div className="card--stats">
                <img className="star" src="src/assets/star.png" alt="" />
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}