/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export default function Box(props) {
  // const [on, setOn] = React.useState(props.on);
  const styles = {
    backgroundColor: props.on ? "#223222" : "transparent",
    border: "1px solid black",
    width: "150px",
    height: "150px",
    margin: "10px",
    display: "inline-block",
  };
  // console.log(styles);
  return <div 
    style={styles} 
    className="box" 
    onClick={props.toggle}>
    {/* onClick={()=>props.toggle(props.id)} */}

    </div>;
}
