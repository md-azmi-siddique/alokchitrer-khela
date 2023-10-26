import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import HeroDesign from "./Components/HeroDesing/HeroDesign";
import CardItem from "./Components/CardItem/CardItem";
import Error404 from "./Components/Error404/Error404";
import FeatureProducts from './Components/FeatureProducts/FeatureProducts'
import carouselItemData from "./Data/carouselItemData.json";
import catagoriesItemData from "./Data/catagoriesItemData.json";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
      <Header />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <HeroDesign carouselItem={carouselItem} />
                <CardItem cardItemList={catagoriesItem} />
                <FeatureProducts featureItem={carouselItem}></FeatureProducts>
              </React.Fragment>
            }
          />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
