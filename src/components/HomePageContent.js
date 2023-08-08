import React from 'react';
import HomePageCard from './HomePageCard';

const contents = [
  {
    id: 0,
    title: 'No Plan B',
    image: '../images/home_grid_1.jpg',
    link: 'see more',
  },
  {
    id: 1,
    title: 'Guinness World Records 2023',
    image: '../images/home_grid_2.jpg',
    link: 'see more',
  },
  {
    id: 2,
    title: 'One: Simple One-Pan Wonders',
    image: '../images/home_grid_3.jpg',
    link: 'see more',
  },
  {
    id: 3,
    title: 'The Bullet That Missed',
    image: '../images/home_grid_4.jpg',
    link: 'see more',
  },
  {
    id: 4,
    title: 'Facts For Curious Minds',
    image: '../images/home_grid_5.jpg',
    link: 'see more',
  },
  {
    id: 5,
    title: 'It Start with Us',
    image: '../images/home_grid_6.jpg',
    link: 'see more',
  },
  {
    id: 6,
    title: 'SPACEBOY',
    image: '../images/home_grid_7.jpg',
    link: 'see more',
  },
  {
    id: 7,
    title: 'Lessons in Chemistry',
    image: '../images/home_grid_8.jpg',
    link: 'see more',
  },
];
const HomePageContent = () => (

  <div className="grid grid-cols-3 xl:grid-cols-4 text-left -mt-[350px]">
    {
        contents.map((content) => <HomePageCard key={content.id} content={content} />)
      }
    <div className="xl:hidden mt-4 mr-4">
      <img src="../../images/banner_image_2.jpg" className="pt-7" alt="banner" />
    </div>
  </div>

);

export default HomePageContent;
