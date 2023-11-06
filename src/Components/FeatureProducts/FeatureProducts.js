import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import "./FeatureProducts.css";
import { Link } from "react-router-dom";

const FeatureProducts = (props) => {
  const { featureItem } = props;

  return (
    <div className="featureProducts container">
      <h1>Featured Products</h1>
      <div className="d-flex justify-content-between">
        <h2>Laptop</h2>
        <Link style={{textDecoration:'none'}} to="/laptop">
          <h6 style={{color:'red'}}>See All</h6>
        </Link>
      </div>
      <Swiper
        slidesPerView={2}
        pagination={{
          type: "progressbar",
        }}
        navigation={false}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          // When the viewport width is less than or equal to 767 pixels (typical mobile devices)
          767: {
            slidesPerView: 4, // Display 4 slides on larger devices
          },
        }}
      >
        {featureItem
          .filter((item) => item.category === "laptop") // Filter items with the category "laptop"
          .slice(0,10).map((item) => (
            <SwiperSlide>
              <div className="card h-100">
                <div className="card-body">
                  <Link to={"/product/" + item.key}>
                    <img src={item.img} className="card-img-top card-img" alt="..." />
                    <h5 className="card-title">{item.seller}</h5>
                    <small>{item.name}</small>
                  </Link>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    <b>Price: {item.price}</b>
                  </small>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

      <div className="d-flex justify-content-between">
        <h2>Android</h2>
        <Link style={{textDecoration:'none'}} to="/android">
          <h6 style={{color:'red'}}>See All</h6>
        </Link>
      </div>
      <Swiper
        slidesPerView={2}
        pagination={{
          type: "progressbar",
        }}
        navigation={false}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          // When the viewport width is less than or equal to 767 pixels (typical mobile devices)
          767: {
            slidesPerView: 4, // Display 4 slides on larger devices
          },
        }}
      >
        {featureItem
          .filter((item) => item.category === "android") // Filter items with the category "android"
          .slice(0,10).map((item) => (
            <SwiperSlide>
              <div className="card h-100">
                <div className="card-body">
                  <Link to={"/product/" + item.key}>
                    <img src={item.img} className="card-img-top card-img" alt="..." />
                    <h5 className="card-title">{item.seller}</h5>
                    <small>{item.name}</small>
                  </Link>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    <b>Price: {item.price}</b>
                  </small>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default FeatureProducts;
