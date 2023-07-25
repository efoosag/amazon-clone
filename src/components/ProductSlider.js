import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const ProductSlider = () => (
  <div className="bg-white ml-8 mr-8 mt-3 mb-3 p-3 rounded-[20px]">
    <div className="text-2xl font-semibold mb-3">Best Seller</div>
    <Swiper
      slidesPerView={7}
      spaceBetween={10}
      navigation
      modules={[Navigation]}
    >
      {
        Array.from({ length: 9 }, (_, i) => (
          <SwiperSlide key={i}>
            <img src={`../../images/product_${i}_small.jpg`} alt="category" />
          </SwiperSlide>
        ))
      }
    </Swiper>
  </div>
);

export default ProductSlider;
