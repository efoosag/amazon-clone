import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Search = () => (
  <div className="flex items-center rounded h-10 w-[100%] bg-amazonclone-yellow">
    <select className="h-[100%] max-w-full pl-2 pr-2 border-0 text-black bg-amazonclone-background rounded-l">
      <option>All</option>
      <option>Automobiles</option>
      <option>Baby&#39;s</option>
      <option>Books</option>
      <option>Computers</option>
      <option>Electronics</option>
      <option>Fashions</option>
      <option>Health</option>
    </select>
    <input type="text" className="flex grow items-center text-black h-[100%]" />
    <button type="button" className="w-[45px] p-3 rounded-r text-black font-extrabold">
      <MagnifyingGlassIcon />
    </button>
  </div>
);

export default Search;
