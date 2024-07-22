/* eslint-disable react/prop-types */
import React from "react";

export default function Joke(props) {
  /**
   * Challenge:
   * - Create state `isShown` (boolean, default to `false`)
   * - Add a button that toggles the value back and forth
   */
  const [isShown, setIsShown] = React.useState(false);

  function toggleShown() {
    setIsShown((prevState) => !prevState);
  }
  return (
    <div>
      {props.setup && <h3>{props.setup}</h3>}
      <button onClick={toggleShown}>
        {isShown ? "Hide Punchline" : "Show Punchline"}
      </button>
      <p style={{ display: isShown ? "block" : "none" }}>{props.punchline}</p>
      {/* <p>{props.punchline}</p> */}

      <hr />
    </div>
  );
}
