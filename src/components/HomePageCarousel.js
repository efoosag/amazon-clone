import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const HomePageCarousel = () => (
  <div className="h-[600px] bg-white">
    <Swiper
      loop
      navigation
      spaceBetween={0}
      modules={[Navigation, Autoplay]}
      autoplay={{
        delay: 4500,
      }}
      className="h-[50%]"
    >
      <SwiperSlide>
        <img src="../../images/carousel_1.jpg" alt="carousel_1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../images/carousel_2.jpg" alt="carousel_2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../images/carousel_3.jpg" alt="carousel_3" />
      </SwiperSlide>
      <SwiperSlide className="bg-black">
        <video controls muted="muted">
          <source src="../../images/carousel_vid.mp4" type="video/mp4" />
          <track src="captions_en.vtt" kind="captions" srcLang="en" label="english_captions" />
        </video>
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../images/carousel_4.jpg" alt="carousel_4" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../images/carousel_5.jpg" alt="carousel_5" />
      </SwiperSlide>
    </Swiper>
    <div className="h-[50%] bg-gradient-to-b from-stone-900" />
  </div>
);

export default HomePageCarousel;
