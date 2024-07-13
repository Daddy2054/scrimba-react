import React from "react";
const Info = () => {
  return (
    <div className="info">
      <img src="src/assets/photo.png" alt="avatar" />
      <h1> Laura Smith </h1> <h2 className="role"> Frontend Developer </h2>{" "}
      <h3 className="url">laura.smith.website </h3>
      <div className="btn-group">

      <button className="btn1">
        <span>
        <img className="icon" src="src/assets/email.png" alt="email" />
        </span>
        Email{" "}
      </button>
      <button className="btn2">
        <span>

        <img className="icon" src="src/assets/in.png" alt="linkedin" />
        LinkedIn{" "}
        </span>
      </button>
      </div>
    </div>
  );
};

export default Info;
