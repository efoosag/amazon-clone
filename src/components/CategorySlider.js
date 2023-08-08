import React from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const CategorySlider = () => {
  const navigate = useNavigate();
  const searchCategory = (category) => {
    navigate({
      pathname: 'search',
      search: `${
        createSearchParams({
          category: `${category}`,
          searchItem: '',
        })
      }`,
    });
  };

  return (
    <div className="bg-white ml-8 mr-8 mt-3 mb-3 p-3 rounded-[20px]">
      <div className="text-2xl font-semibold mb-3">Shop By Category</div>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        navigation
        modules={[Navigation]}
      >
        <SwiperSlide onClick={() => searchCategory('Deals')} className="cursor-pointer">
          <img src="../../images/category_0.jpg" alt="category" />
        </SwiperSlide>
        <SwiperSlide onClick={() => searchCategory('Amazon')} className="cursor-pointer">
          <img src="../../images/category_1.jpg" alt="category" />
        </SwiperSlide>
        <SwiperSlide onClick={() => searchCategory('Fashion')} className="cursor-pointer">
          <img src="../../images/category_2.jpg" alt="category" />
        </SwiperSlide>
        <SwiperSlide onClick={() => searchCategory('Computers')} className="cursor-pointer">
          <img src="../../images/category_3.jpg" alt="category" />
        </SwiperSlide>
        <SwiperSlide onClick={() => searchCategory('Home')} className="cursor-pointer">
          <img src="../../images/category_4.jpg" alt="category" />
        </SwiperSlide>
        <SwiperSlide onClick={() => searchCategory('Mobiles')} className="cursor-pointer">
          <img src="../../images/category_5.jpg" alt="category" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CategorySlider;
