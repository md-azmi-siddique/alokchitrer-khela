import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import HeroDesign from "./Components/HeroDesing/HeroDesign";
import CardItem from "./Components/CardItem/CardItem";
import Error404 from "./Components/Error404/Error404";
import FeatureProducts from "./Components/FeatureProducts/FeatureProducts";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
<<<<<<< HEAD
import ContactUs from "./Components/ContactUs/ContactUs";

// import data from "./Data/carouselItemData.json";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Laptop from "./Components/Laptop/Laptop";
import Android from "./Components/Android/Android";
=======
import ContactUs from './Components/ContactUs/ContactUs';


// import data from "./Data/carouselItemData.json";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
>>>>>>> d8442248f1c6da61cb543ef861ad1a01eca56270


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
                <ContactUs></ContactUs>
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
          <Route
            path="/laptop"
            element={
              <>
                <Header></Header>
                <Laptop laptop={product}></Laptop>
                <ContactUs></ContactUs>
              </>
            }
          />
          <Route
            path="/android"
            element={
              <>
                <Header></Header>
                <Android android={product}></Android>
                <ContactUs></ContactUs>
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
