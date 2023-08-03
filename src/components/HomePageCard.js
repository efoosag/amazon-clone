import React from 'react';
import PropTypes from 'prop-types';

const HomePageCard = ({ title, imag, link }) => (
  <div className="h-[420px] bg-white m-1 p-2">
    <div className="text-lg xl:text-xl font-semibold ml-4 mt-4 text-black">{title}</div>
    <div className="h-[300px] ml-4 mt-4">
      <img src={imag} className="h-[100%] w-[100%] object-cover" alt="imag" />
    </div>
    <div className="text-xs xl:text-sm text-blue-400 ml-4">{link}</div>
  </div>
);

HomePageCard.propTypes = {
  title: PropTypes.string.isRequired,
  imag: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default HomePageCard;
