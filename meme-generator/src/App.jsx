import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import React from "react";
// import Card from "./components/Card";
// import data from "./data";

export default function App() {
  // const cards = data.map((item) => {
  //   return (
  //     <Card
  //       key={item.id}
  //       {...item}
  //       // img={item.coverImg}
  //       // rating={item.stats.rating}
  //       // reviewCount={item.stats.reviewCount}
  //       // location={item.location}
  //       // title={item.title}
  //       // price={item.price}
  //       // openSpots={item.openSpots}
  //     />
  //   );
  // });
  return (
    <>
      <Header />
      <Hero />
      {/* <section className="cards-list">{cards}</section> */}
    </>
  );
}
