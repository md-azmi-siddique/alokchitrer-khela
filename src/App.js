import './App.css';
import React, { useEffect, useState } from "react";
import Header from './Components/Header/Header';
import HeroDesign from './Components/HeroDesing/HeroDesign';
import CardItem from './Components/CardItem/CardItem';
import carouselItemData from "./Data/carouselItemData.json";
import catagoriesItemData from "./Data/catagoriesItemData.json";

function App() {
  const [carouselItem, setCarouselItem] = useState([]);
  useEffect(() => {
    setCarouselItem(carouselItemData);
  }, []);
  
  const [catagoriesItem, setCatagoriesItem] = useState([]);
  useEffect(() => {
    setCatagoriesItem(catagoriesItemData);
  }, []);
  return (
    <div>
      <Header></Header>
      

      <HeroDesign carouselItem={carouselItem} />

      <CardItem cardItemList={catagoriesItem}></CardItem>

    </div>
  );
}

export default App;
