import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon, Bars3Icon } from '@heroicons/react/24/outline';
import Search from './Search';

const NavBar = () => (
  <header className="min-w-[1000px]">
    <div className="flex bg-amazonclone text-white h-[60px]">
      <div className="flex items-center m-4">
        <Link to="/">
          <img className="h-[30px] w-[200px] m-3" src="../../images/amazon.png" alt="images" />
        </Link>
        <div className="pr-4 pl-4">
          <div className="text-xs xl:text-sm">Deliver to</div>
          <div className="text-sm xl:text-base font-bold">Nigeria</div>
        </div>
      </div>
      <div className="flex items-center grow">
        <Search />
      </div>
      <div className="flex items-center m-4">
        <div className="pr-4 pl-4">
          <div className="text-xs xl:text-sm">Hello, Sign in</div>
          <div className="text-sm xl:text-base font-bold">Account & Lists</div>
        </div>
        <div className="pr-4 pl-4">
          <div className="text-xs xl:text-sm">Returns</div>
          <div className="text-sm xl:text-base font-bold">& Orders</div>
        </div>
        <div className="flex pr-3 pl-3">
          <ShoppingCartIcon className="h-[45px]" />
          <div className="mt-7 text-sm xl:text-base font-bold">cart</div>
        </div>
      </div>
    </div>
    <div className="flex bg-amazonclone-light_blue text-white space-x-4 p-2 pl-5 text-xs xl:text-sm">
      <div className="flex font-bold">
        <Bars3Icon className="h-[25px]" />
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

export default NavBar;
