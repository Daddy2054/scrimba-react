// import React from "react";
// import ReactDOM from "react-dom";
import Header from "../project1.0/my-app/src/Header.js";

function TemporaryName() {
  return (
    <div>
      <img src="./react-logo.png" width="40px" alt="React logo" />
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  )
}

function Page() {
  return (
    <div>
      <Header />
      <Maincontent />
      <Footer />
    </div>
  )
}
function Maincontent() {
  return (<div>

    <h1>My awesome website in React</h1>
    <h3>Reasons I love React</h3>
    <ol>
      <li>It's composable</li>
      <li>It's declarative</li>
      <li>It's a hireable skill</li>
      <li>It's actively maintained by skilled people</li>
    </ol>
  </div>
  )
}

function Footer() {
  return (<footer>© 2023 React Facts. All rights reserved.</footer>)
}

// ReactDOM.render(<TemporaryName />, document.getElementById("root"))
ReactDOM.render(<Page />, document.getElementById("root"))
