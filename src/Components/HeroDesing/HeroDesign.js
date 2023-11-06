import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "./HeroDesign.css";

// import required modules
import {EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";


const HeroDesign = (props) => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  const { carouselItem } = props;
  return (
    <div className="slideBar">
      <Swiper 
        spaceBetween={30} 
        centeredSlides={true} 
        autoplay={{ delay: 2500, disableOnInteraction: false,}} 
        // pagination={{clickable: true,}}
        // navigation={true} 
        effect={'fade'}
        modules={[EffectFade, Autoplay, Pagination, Navigation]} 
        className="mySwiper"
      >
      {carouselItem.slice(0,15).map(item => (
        <SwiperSlide>
          <div class="container">
            <div class="row">
              <div class="col-md-6" style={{marginTop:'auto', marginBottom:'auto'}}>
                <h1>{item.seller}</h1>
                {item.name}
              </div>
              <div class="col-md-6" >
                <img style={{marginLeft:'auto', marginRight:'auto', width:"450" ,height:"450"}} className='imgSlide responsive' src={item.img} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        ))}
        
      </Swiper>
    </div>
  );
};

export default HeroDesign;
