// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Info from "./Components/Info";
import About from "./Components/About";
import Interests from "./Components/Interests";
import Footer from "./Components/Footer";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Info />
      <About />
      <Interests />
      <Footer />
    </>
  );
}

export default App;
