import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import React from "react";
import Card from "./components/Card";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Card
        img="image1.png"
        rating="5.0"
        reviewCount="6"
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price="136"
      />
    </>
  );
}
