import React, { useEffect, useState } from "react";
import { Carousel, Col, Row } from "react-bootstrap";
import carouselItemData from "../../Data/carouselItemData.json";
import './HeroDesign.css'

const HeroDesign = () => {
  // console.log(carouselItemData);
  const [carouselItem, setCarouselItem] = useState([]);
  useEffect(() => {
    setCarouselItem(carouselItemData);
  }, []);
  return (
    <div className="heroSlide">
      <Carousel defaultActiveIndex={0} interval={5000} className="custom-carousel">
       
        {carouselItem.slice(0, 15).map((citem) => (
          <Carousel.Item className="custom-carousel-item" key={citem.key}>
            <Row>
              <Col sm={8}>
                <h1>{citem.name}</h1>
                <button class="buyNow">BUY NOW</button>
              </Col>
              <Col sm={4}>
                
                <img
                  src={citem.img}
                  className="img-fluid custom-carousel-image"
                
                  alt=""
                />
            
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroDesign;
