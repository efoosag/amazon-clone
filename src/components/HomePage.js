import React from 'react';
import Slider from './Slider';
import HomePageLists from './HomePageLists';
import CategorySlider from './CategorySlider';
import ProductSlider from './ProductSlider';

const HomePage = () => (
  <div className="bg-amazonclone-background">
    <div>
      <Slider />
      <HomePageLists />
      <ProductSlider />
      <CategorySlider />
      <div className="h-[200px] mt-4">
        <img src="../../images/banner_image.jpg" className="h-[100%] m-auto" alt="banner" />
      </div>
    </div>
  </div>
);

export default HomePage;
