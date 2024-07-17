import React from "react";
import memesData from "../../memesData";
export default function Form() {
  const[meme,setMeme]=React.useState({
    topText:"",
    bottomText:"",
    randomImage:"http://i.imgflip.com/1bij.jpg"
  });
  const[allMemes,setAllMemes]=React.useState(memesData);
// const [memeImage, setMemeImage] = React.useState("");

  function getMemeImage() {
    const memesArray = allMemes.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }));
    
  }
//     const meme = memesData.data.memes[Math.floor(Math.random() * memesData.data.memes.length)];
//     const {url} = meme;
//     console.log(url);
//     setMemeImage(url);
//   }
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
    <img className="meme--image" src={meme.randomImage} />
        </>
  );
}
