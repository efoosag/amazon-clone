import React, { useState, useEffect } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import callAPI from '../utility/callAPI';

const Search = () => {
  const [suggestions, setSuggestion] = useState(null);
  const [searchItem, setSearchItem] = useState('');
  const [category, setCategory] = useState('All');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate({
      pathname: 'search',
      search: `${
        createSearchParams({
          category: `${category}`,
          searchItem: `${searchItem}`,
        })
      }`,
    });
    setCategory('All');
    setSearchItem('');
  };

  const getSuggestion = () => {
    callAPI('data/suggestions.json')
      .then((suggestionResults) => {
        setSuggestion(suggestionResults);
      });
  };

  useEffect(() => {
    getSuggestion();
  }, []);

  return (
    <div className="w-[100%] relative">
      <div className="flex items-center rounded h-10 w-[100%] bg-amazonclone-yellow">
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="h-[100%] max-w-full pl-2 pr-2 border-0 text-black bg-amazonclone-background rounded-l"
        >
          <option>All</option>
          <option>Automobiles</option>
          <option>Baby&#39;s</option>
          <option>Books</option>
          <option>Computers</option>
          <option>Electronics</option>
          <option>Fashions</option>
          <option>Health</option>
        </select>
        <input
          type="text"
          className="flex grow items-center text-black h-[100%]"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
        <button type="button" onClick={handleSubmit} className="w-[45px] p-3 rounded-r text-black font-extrabold">
          <MagnifyingGlassIcon />
        </button>
      </div>
      <div className="bg-white text-black w-[100%] z-30 absolute pl-1">
        {
        suggestions
        && (

          suggestions.filter((suggestion) => {
            const currentSearchItem = searchItem.toLowerCase();
            const title = suggestion.title.toLowerCase();
            return (
              currentSearchItem
                  && title.startsWith(currentSearchItem)
                  && title !== currentSearchItem
            );
          })
            .slice(0, 10)
            .map((suggestion) => (
              <div key={suggestion.id} onClick={() => setSearchItem(suggestion.title)} aria-hidden="true">
                {suggestion.title}
              </div>
            ))

        )
        }
      </div>
    </div>
  );
};

export default Search;
