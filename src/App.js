import './App.css';
import React, { useEffect, useState } from "react";
import Header from './Components/Header/Header';
import HeroDesign from './Components/HeroDesing/HeroDesign';
import CardItem from './Components/CardItem/CardItem';
import FeatureProducts from './Components/FeatureProducts/FeatureProducts';
import data from "./Data/carouselItemData.json";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [carouselItem, setCarouselItem] = useState([]);
  useEffect(() => {
    setCarouselItem(data);
  }, []);

  return (
    <div>
          <Header></Header>
      
      <Router>
      <Switch>
      {/* <Route exact path="/" component={HomePage} /> */}
          <Route exact path="/">
            <HeroDesign carouselItem={carouselItem}></HeroDesign>
            <CardItem cardItemList={carouselItem}></CardItem>
            {/* need to solbe feature product */}
            <FeatureProducts featureItem={carouselItem}></FeatureProducts>
          </Route>
          <Route path="/Link">
          <CardItem cardItemList={carouselItem}></CardItem>
          </Route>

        </Switch>

      </Router>

      

    </div>
  );
}

export default App;
