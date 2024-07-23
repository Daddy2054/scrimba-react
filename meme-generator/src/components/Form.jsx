/* eslint-disable no-unused-vars */
import React from "react";
// import memesData from "../../memesData";
export default function Form() {

  const [meme, setMeme] = React.useState({
    topText: "one does not simply",
    bottomText: "walk into mordor",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = React.useState([]);
  
  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      // .then((data)=>console.log(data));
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage() {
    // const memesArray = allMemes.data.memes;
    // console.log(allMemes);
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }


  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }
  return (
    <>
      <div className="form">
        <div className="input--group">
          <div className="input--field">
            <p className="input--label">Top text</p>
            <input
              type="text"
              name="topText"
              onChange={handleChange}
              value={meme.topText}
            />
          </div>
          <div className="input--field">
            <p className="input--label">Bottom text</p>
            <input
              type="text"
              name="bottomText"
              onChange={handleChange}
              value={meme.bottomText}
            />
          </div>
        </div>
        <input
          type="button"
          className="button--get"
          value="Get a new meme image"
          onClick={getMemeImage}
        />
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </>
  );
}
