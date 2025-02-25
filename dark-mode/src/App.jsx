/* eslint-disable no-unused-vars */

import './App.css'
import React from "react"
import Navbar from "./components/Navbar.jsx"
import Main from "./components/Main.jsx"

export default function App() {
const [darkMode, setDarkMode] = React.useState(true)

  function toggleDarkMode(){
    // console.log("clicked")
    setDarkMode(prevMode => !prevMode)
  }
    return (
        <div className="container">
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
            <Main darkMode={darkMode}/>
        </div>
    )
}