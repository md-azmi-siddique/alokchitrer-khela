import './App.css';
import React, { useEffect, useState } from "react";
import Header from './Components/Header/Header';
import HeroDesign from './Components/HeroDesing/HeroDesign';
import CardItem from './Components/CardItem/CardItem';
import carouselItemData from "./Data/carouselItemData.json";

function App() {
  const [carouselItem, setCarouselItem] = useState([]);
  useEffect(() => {
    setCarouselItem(carouselItemData);
  }, []);

  return (
    <div>
      <Header></Header>

      <HeroDesign carouselItem={carouselItem} />

      <CardItem cardItemList={carouselItem}></CardItem>

    </div>
  );
}

export default App;
