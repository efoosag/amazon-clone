import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import US_CURRENCY from '../utility/constants';
import { removeFromCart } from '../features/cartSlice';

const Checkout = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const itemsNumbers = useSelector((state) => state.cart.productNumber);
  const subTotal = useSelector((state) => state.cart.products.reduce((subtotal, product) => subtotal
    + (product.price * product.quantity), 0));
  return (
    <div className="bg-amazonclone-background">
      <div className="m-auto p-2">
        <div className="grid grid-cols-8 gap-10">
          <div className="col-span-6 bg-white">
            <div className="text-2xl xl:text-3xl m-4"> Shopping Cart</div>
            {
              products
              && products.map((product) => (
                <div className="grid grid-cols-12  divide-y divide-gray-400" key={product.id}>
                  <div className="col-span-10 grid grid-cols-8  divide-y divide-gray-400">
                    <div className="col-span-2">
                      <Link to={`/product/${product.id}`}>
                        <img className="p-4" src={product.image_small} alt="small_image" />
                      </Link>
                    </div>
                    <div className="col-span-6">
                      <div className="font-medium text-black pt-2">
                        <Link to={`/product/${product.id}`}>
                          <ProductDetails product={product} rating={false} />
                        </Link>
                      </div>
                      <div>
                        <button type="button" className="text-sm xl:text-base font-semibold text-red-500 mt-2 mb-2" onClick={() => dispatch(removeFromCart(product.id))}>Delete</button>
                      </div>
                      <div className="grid grid-cols-3 w-20 text-center">
                        <div className="text-xl xl:text-2xl bg-gray-400 rounded">-</div>
                        <div className="text-lg xl:text-xl bg-gray-200">{product.quantity}</div>
                        <div className="text-xl xl:text-2xl bg-gray-400 rounded">+</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div className="text-lg xl:text-xl font-semibold mt-4">
                      {US_CURRENCY.format(product.price)}
                    </div>
                  </div>
                </div>
              ))
            }
            {
              subTotal > 0
                && (
                <div className="text-lg xl:text-xl font-semibold mb-4 mr-4 text-right">
                  Subtotal
                  (
                  {itemsNumbers}
                  {' '}
                  Items)
                  :
                  <span className="font-semibold ml-1">{US_CURRENCY.format(subTotal)}</span>
                </div>
                )
            }

          </div>
          <div className="col-span-2 h-[250px] rounded bg-white p-5">
            <div className="text-xs xl:text-sm text-green-700 mb-3">
              Your order qualify for
              <span className="font-semibold"> FREE DELIVERY </span>
              Delivery Details
            </div>
            <div className="text-base xl:text-lg font-semibold mb-4">
              Subtotal
              (
              {itemsNumbers}
              {' '}
              Items)
              :
              <span className="font-semibold ml-1">{US_CURRENCY.format(subTotal)}</span>
            </div>
            <button type="button" className="bg-yellow-400 w-full p-3 text-xs xl:text-sm rounded hover:bg-yellow-500 mt-3">Proceed To Checkout</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Checkout;
