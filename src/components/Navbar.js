import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MapPinIcon, Bars3Icon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import Search from './Search';

const Navbar = () => {
  const cart = useSelector((state) => state.cart.productNumber);
  return (
    <header className="">
      <div className="flex items-center pr-5 pl-5 h-14 bg-amazonclone-default text-red-50">
        <Link to="/">
          <div>
            <img src="../../images/amazon.png" className="w-24" alt="amazon" />
          </div>
        </Link>
        <div className="flex pl-4 pr-4">
          <div>
            <MapPinIcon className="w-[25px] mt-3" />
          </div>
          <div>
            <div className="text-xs xl:text-sm">Deliver to</div>
            <div className="text-sm xl:text-base font-bold">Nigeria</div>
          </div>
        </div>
        <div className="flex grow">
          <Search />
        </div>
        <div className="amazon_country" />
        <div className="pl-4 pr-4">
          <div className="text-xs xl:text-sm">Hello, sign in</div>
          <div className="text-sm xl:text-base font-bold">Account & Lists</div>
        </div>
        <div className="pl-4 pr-4">
          <div className="text-xs xl:text-sm">Returns</div>
          <div className="text-sm xl:text-base font-bold">& Orders</div>
        </div>
        <Link to="/checkout">
          <div className="flex">
            <ShoppingCartIcon className="text-white h-12" />
            <div className="relative">
              <div className="absolute right-[10px] m-2 font-bold text-yellow-600">{cart}</div>
            </div>
            <div className="mt-6 text-xs xl:text-sm font-bold">Cart</div>
          </div>
        </Link>
      </div>
      <div className="flex items-center bg-amazonclone-light_blue text-white pl-5 h-10 space-x-4">
        <div className="flex items-center">
          <Bars3Icon className="w-[30px]" />
          <div>All</div>
        </div>
        <div>Today&#39;s Deals</div>
        <div>Customer Service</div>
        <div>Registry</div>
        <div>Gift Cards</div>
        <div>Sell</div>
      </div>
    </header>
  );
};

export default Navbar;
