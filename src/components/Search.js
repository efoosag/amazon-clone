import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import React from 'react';

function Search() {
  return (
    <div className="w-full">
      <div className="flex items-center bg-amazonclone-yellow rounded h-10">
        <div>
          <select className="p-2 bg-gray-300 border text-xs xl:text-sm text-black">
            <option>All</option>
            <option>Deals</option>
            <option>Amazon</option>
            <option>Fashion</option>
            <option>Computers</option>
            <option>Home</option>
            <option>Mobiles</option>
          </select>
        </div>
        <div className="flex grow h-[100%]">
          <input type="text" className="flex items-center h-[100%] w-[100%] rounded-l text-black" />
        </div>
        <div className="h-[45px]">
          <MagnifyingGlassIcon className="w-[27px] m-3 stroke-slate-900" />
        </div>
      </div>
    </div>
  );
}

export default Search;
