import React from 'react';
import HomePageCard from './HomePageCard';

const items = [
  {
    id: 1, title: 'We have a surprise for you', imag: '../../images/home_grid_1.jpg', link: 'See terms and conditions',
  },
  {
    id: 2, title: 'Watch The Rings of Power', imag: '../../images/home_grid_2.jpg', link: 'Start streaming now',
  },
  {
    id: 3, title: 'Unlimited Streaming', imag: '../../images/home_grid_3.jpg', link: 'Find out more',
  },
  {
    id: 4, title: 'More titles to explore', imag: '../../images/home_grid_4.jpg', link: 'Browse Kindle Unlimited',
  },
  {
    id: 5, title: 'Shop Pet Supplies', imag: '../../images/home_grid_5.jpg', link: 'See more',
  },
  {
    id: 6, title: 'Spring Sale', imag: '../../images/home_grid_6.jpg', link: 'See the deals',
  },
  {
    id: 7, title: 'Echo Buds', imag: '../../images/home_grid_7.jpg', link: 'See more',
  },
  {
    id: 8, title: 'Family Plan: 3 months free', imag: '../../images/home_grid_8.jpg', link: 'Learn more',
  },
];
const HomePageLists = () => (
  <>
    <div className="grid grid-cols-3 xl:grid-cols-4 mt-[-300px] ml-5 mr-5">
      {items.map((item) => (
        <HomePageCard
          key={item.id}
          title={item.title}
          imag={item.imag}
          link={item.link}
        />
      ))}
      <div className="p-3 xl:hidden">
        <img src="../../images/banner_image_2.jpg" className="h-[420px] rounded-[20px]" alt="advert" />
      </div>
    </div>
  </>
);

export default HomePageLists;
