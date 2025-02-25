import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import data from "./data";

export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <>
      <Navbar />
      <section className="cards-list">{cards}</section>
    </>
  );
}
