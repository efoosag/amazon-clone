import React from 'react';

const HomePageCard = ({ content }) => {
  const { title, image, link } = content;
  return (
    <div className="h-[420px] bg-white z-30 m-3 rounded">
      <div className="text-base xl:text-lg font-semibold ml-4 mt-4">{title}</div>
      <div className="h-[300px] m-4"><img src={image} className="h-[100%] w-[100%] object-cover" alt="images" /></div>
      <div className="text-xs xl:text-sm text-blue-600 ml-4">{link}</div>
    </div>
  );
};

export default HomePageCard;
