import React, { useEffect, useState } from "react";
import {Carousel} from "react-bootstrap";
import carouselItemData from "../../Data/carouselItemData.json";

const Hero = () => {
  // console.log(carouselItemData);
  const [carouselItem, setCarouselItem] = useState([]);
  useEffect(() => {
    setCarouselItem(carouselItemData);
  }, []);
  return (
    <div>
      <Carousel>
        {carouselItem.slice(0, 3).map((citem) => (
          <Carousel.Item key={citem.key}>
            <img 
              src={citem.img}
              className="img-fluid"
              style={{ width: "1400px", height: "450px"  }}
              alt=""
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
