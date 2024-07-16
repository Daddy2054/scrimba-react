import React from "react";
export default function Form() {
  return (
    <div className="form">
      <div className="input--group">

      <div className="input--field">
        <p className="input--label">Top text</p>
        <input type="text" name="top" />
      </div>
      <div className="input--field">
        <p className="input--label">Bottom text</p>
        <input type="text" name="bottom" />
      </div>
      </div>
      <input type="button" className="button--get" value="Get a new meme image"/>
    </div>
  );
}
