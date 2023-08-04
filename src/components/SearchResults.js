import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import callAPI from '../utility/callAPI';
import ProductDetails from './ProductDetails';
import US_CURRENCY from '../utility/constants';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState();

  const getSearchItems = () => {
    const searchItem = searchParams.get('searchItem');
    const category = searchParams.get('category');

    callAPI('data/search.json')
      .then((searchResults) => {
        const categoryResults = searchResults[category];
        if (searchItem) {
          const results = categoryResults.filter((product) => product.title.toLowerCase()
            .includes(searchItem.toLowerCase()));
          setProducts(results);
        } else {
          setProducts(categoryResults);
        }
      });
  };

  useEffect(() => {
    getSearchItems();
  }, [searchParams]);
  return (
    <div className="p-4">
      {
        products && products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div className="h-[200px] m-1 bg-red-600 grid grid-cols-12">
              <div className="col-span-2 p-4 bg-gray-200">
                <img src={product.image_small} alt="images" className="m-auto" />
              </div>
              <div className="col-span-10 bg-gray-50 border border-gray-100 hover:bg-gray-100">
                <div className="font-medium text-black p-2">
                  <ProductDetails product={product} rating />
                  <div className="text-xl xl:text-2xl p-1">{US_CURRENCY.format(product.price)}</div>
                </div>
              </div>
            </div>
          </Link>
        ))

      }
    </div>
  );
};

export default SearchResults;
