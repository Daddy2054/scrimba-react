/* eslint-disable react/prop-types */
import "./App.css";

import React from "react";

export default function App() {
  const [count, setCount] = React.useState(0);

  function add() {
    setCount((prevCount) => prevCount + 1);
  }

  function subtract() {
    setCount((prevCount) => prevCount - 1);
  }
  console.log("App component rendered")

  function Count(props) {
    console.log("Count component rendered")

    return (
      <div className="counter--count">
        <h1>{props.number}</h1>
      </div>
    );
  }

  /**
   * Challenge:
   * - Create a new component named Count
   *    - It should receive a prop called `number`, whose value
   *      is the current value of our count
   *    - Have the component render the whole div.counter--count
   *      and display the incoming prop `number`
   * - Replace the div.counter--count below with an instance of
   *   the new Count component
   */
  return (
    <div className="counter">
      <button className="counter--minus" onClick={subtract}>
        –
      </button>
      <Count number={count} />
      <button className="counter--plus" onClick={add}>
        +
      </button>
    </div>
  );
}
