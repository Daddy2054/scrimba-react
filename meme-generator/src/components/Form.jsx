import React from "react";
import memesData from "../../memesData";
export default function Form() {
const [memeImage, setMemeImage] = React.useState("");
  function getMemeImage() {
    const meme = memesData.data.memes[Math.floor(Math.random() * memesData.data.memes.length)];
    const {url} = meme;
    console.log(url);
    setMemeImage(url);
  }
  return (
    <>
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
      <input
        type="button"
        className="button--get"
        value="Get a new meme image"
        onClick={getMemeImage}
        />
    </div>
    <img className="meme--image" src={memeImage} />
        </>
  );
}
