import React from "react";
import memesData from "../../memesData";
export default function Form() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  // eslint-disable-next-line no-unused-vars
  const [allMemes, setAllMemes] = React.useState(memesData);
  // const [memeImage, setMemeImage] = React.useState("");

  function getMemeImage() {
    const memesArray = allMemes.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }
  //     const meme = memesData.data.memes[Math.floor(Math.random() * memesData.data.memes.length)];
  //     const {url} = meme;
  //     console.log(url);
  //     setMemeImage(url);
  //   }

  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => {
        return {
            ...prevMeme,
            [name]:  value
        }
    })
}
  return (
    <>
      <div className="form">
        <div className="input--group">
          <div className="input--field">
            <p className="input--label">Top text</p>
            <input type="text" name="topText" 
            onChange={handleChange}
            value={meme.topText}
            />
          </div>
          <div className="input--field">
            <p className="input--label">Bottom text</p>
            <input type="text" name="bottomText" 
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
