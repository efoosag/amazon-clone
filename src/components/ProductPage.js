import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import callAPI from '../utility/callAPI';
import ProductDetails from './ProductDetails';
import US_CURRENCY from '../utility/constants';
import { addToCart } from '../features/cartSlice';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const getProduct = () => {
    callAPI('data/products.json')
      .then((productResults) => {
        setProduct(productResults[id]);
      });
  };

  const addProductQuantity = () => {
    setProduct(product.quantity = quantity);
    return product;
  };

  useEffect(() => {
    getProduct();
  }, []);

  if (!product?.title) return <h1>Loading........</h1>;
  return (
    product
    && (
    <div className="h-screen bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[1500px] m-auto p-4">
        <div className="grid grid-cols-10 gap-2">
          <div className="col-span-3 p-8 rounded bg-white">
            <img src={product.image} alt="images" />
          </div>
          <div className="col-span-5 p-4 rounded bg-white divide-y divide-gray-400">
            <div className="mb-3"><ProductDetails product={product} rating /></div>
            <div className="text-base xl:text-lg mt-3">{product.description}</div>
          </div>
          <div className="col-span-2 p-4 bg-white rounded">
            <div className="text-xl xl:text-2xl text-red-700 text-right font-semibold">
              <span className="mr-3 text-xl">Now Selling:</span>
              {US_CURRENCY.format(product.price)}
            </div>
            <div className="text-base xl:text-lg text-gray-500 text-right font-semibold"><span className="line-through">{US_CURRENCY.format(product.oldPrice)}</span></div>
            <div className="text-sm xl:text-base text-blue-500 font-semibold mt-3">FREE Returns</div>
            <div className="text-sm xl:text-base  text-blue-500 font-semibold mt-1">FREE Delivery</div>
            <div className="text-base xl:text-lg  text-green-600 font-semibold mt-1">In Stock</div>
            <div className="text-base xl:text-lg">
              Quantity:
              <select
                className="bg-white p-2 border rounded-md focus:border-indigo-600 ml-2"
                onChange={(e) => setQuantity(e.target.value)}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            <Link to="/checkout">
              <button type="button" onClick={() => dispatch(addToCart(addProductQuantity()))} className="bg-yellow-400 w-full p-3 text-xs xl:text-sm rounded hover:bg-yellow-500 mt-3">Add To Cart</button>
            </Link>
          </div>

        </div>
      </div>
    </div>
    )
  );
};

export default ProductPage;
