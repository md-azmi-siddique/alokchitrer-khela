import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import HeroDesign from "./Components/HeroDesing/HeroDesign";
import CardItem from "./Components/CardItem/CardItem";
import Error404 from "./Components/Error404/Error404";
import FeatureProducts from "./Components/FeatureProducts/FeatureProducts";
import ProductDetail from "./Components/ProductDetail/ProductDetail";


// import data from "./Data/carouselItemData.json";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from './Components/ContactUs/ContactUs';

function App() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON"
    )
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                {/* <HeaderDemo></HeaderDemo> */}
                <Header></Header>
                <HeroDesign carouselItem={product}></HeroDesign>
                <CardItem cardItemList={product}></CardItem>
                <FeatureProducts featureItem={product}></FeatureProducts>
                <ContactUs></ContactUs>
              </>
            }
          />
          <Route
            path="/FeaturedProducts"
            element={
              <>
                <Header></Header>
                <FeatureProducts featureItem={product}></FeatureProducts>
              </>
            }
          />
          <Route
            path="/product/:productKey"
            element={
              <>
                <Header></Header>
                <ProductDetail></ProductDetail>
              </>
            }
          />
          <Route path="*" element={<Error404></Error404>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
