import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Slider = () => (
  <div className="h-[600px] bg-white">
    <Swiper
      loop
      spaceBetween={0}
      navigation
      modules={[Navigation, Autoplay]}
      autoplay={{
        delay: 3000,
      }}
      className="h-[50%]"
    >
      <SwiperSlide>
        <img src="../../images/carousel_1.jpg" alt="carousei_1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../images/carousel_2.jpg" alt="carousei_2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../images/carousel_3.jpg" alt="carousei_3" />
      </SwiperSlide>
      <SwiperSlide className="bg-black">
        <video controls muted="muted">
          <source src="../../images/carousel_vid.mp4" type="video/mp4" />
          <track src="captions_en.vtt" kind="captions" label="english_captions" />
        </video>
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../images/carousel_5.jpg" alt="carousei_5" />
      </SwiperSlide>
    </Swiper>
    <div className="bg-gradient-to-b h-[50%] from-stone-900" />
  </div>
);

export default Slider;
