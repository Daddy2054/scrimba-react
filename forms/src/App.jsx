/* eslint-disable no-unused-vars */
import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
// import React from "react"

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
  });

  // console.log(formData);

  function handleChange(event) {
    const {name, value,type, checked} = event.target
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
          }
    })
}

  return (
    <form className="form">
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName} //controlled input
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />
      <textarea
        type="textarea"
        placeholder="Comments"
        onChange={handleChange}
        name="comments"
        value={formData.comments}
      />
      <input
        type="checkbox"
        id="isFriendly"
        checked={formData.isFriendly}
        onChange={handleChange}
        name="isFriendly"

      />
      <label htmlFor="isFriendly">Are you friendly?</label>
      <br />
    </form>
  );
}

export default App;
