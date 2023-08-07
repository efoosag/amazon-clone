import React from 'react';
import HomePageCarousel from './HomePageCarousel';
import HomePageContent from './HomePageContent';

const HomePage = () => (
  <div className="min-w-[1000px] max-w-[1200px] m-auto bg-amazonclone-background">
    <HomePageCarousel />
    ;
    <HomePageContent />
    ;
  </div>

);

export default HomePage;
