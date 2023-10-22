import { Carousel } from "react-bootstrap";
import "./HeroDesign.css";

const HeroDesign = (props) => {
  console.log('this is props inside HeroDesign' + props)
  const { carouselItem } = props;

  return (
    <div className="heroSlide">
      <Carousel
        defaultActiveIndex={1}
        interval={1000}
        className="custom-carousel"
      >
        {carouselItem.slice(0,5).map(item => (
          <Carousel.Item className="custom-carousel-item" key={item.key}>
            <div className="centered-content">
              <img
                src={item.img}
                className="img-fluid custom-carousel-image"
                alt=""
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroDesign;
