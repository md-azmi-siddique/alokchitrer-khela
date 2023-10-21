import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import carouselItemData from "../../Data/carouselItemData.json";
import "./HeroDesign.css";

const HeroDesign = () => {
  // console.log(carouselItemData);
  const [carouselItem, setCarouselItem] = useState([]);
  useEffect(() => {
    setCarouselItem(carouselItemData);
  }, []);
  return (
    <div className="heroSlide">
      <Carousel
        defaultActiveIndex={0}
        interval={5000}
        className="custom-carousel"
      >
        {carouselItem.slice(1, 3).map((citem) => (
          <Carousel.Item className="custom-carousel-item" key={citem.key}>
            <div className="centered-content">
              <img
                src={citem.img}
                className="img-fluid custom-carousel-image"
                alt=""
                // style={{ width: "1200px", height: "500px" }}
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroDesign;
