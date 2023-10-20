import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import carouselItemData from "../../Data/carouselItemData.json";

const Hero = () => {
  console.log(carouselItemData);
  const [casouselItem, setCasouselItem] = useState([]);
  useEffect(() => {
    setCasouselItem(carouselItemData);
  }, []);
  return (
    <div>
      <Carousel>
        {casouselItem.slice(0,3).map((citem) => (
          <Carousel.Item key={citem.key}>
            
            <img src={citem.img} style={{width: '1400px' , height: '450px'}} alt="" />

          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
