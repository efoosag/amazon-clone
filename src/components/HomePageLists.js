import React from 'react';
import HomePageCard from './HomePageCard';

const items = [
  {
    id: 1, title: 'test1', imag: '../../images/home_grid_1.jpg', link: 'welcome',
  },
  {
    id: 2, title: 'test1', imag: '../../images/home_grid_2.jpg', link: 'welcome',
  },
  {
    id: 3, title: 'test1', imag: '../../images/home_grid_3.jpg', link: 'welcome',
  },
  {
    id: 4, title: 'test1', imag: '../../images/home_grid_4.jpg', link: 'welcome',
  },
  {
    id: 5, title: 'test1', imag: '../../images/home_grid_5.jpg', link: 'welcome',
  },
  {
    id: 6, title: 'test1', imag: '../../images/home_grid_6.jpg', link: 'welcome',
  },
  {
    id: 7, title: 'test1', imag: '../../images/home_grid_7.jpg', link: 'welcome',
  },
  {
    id: 8, title: 'test1', imag: '../../images/home_grid_8.jpg', link: 'welcome',
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
