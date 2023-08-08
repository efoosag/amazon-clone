import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  productNumber: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const addproductQuantity = state.products.find((product) => product.id === action.payload.id);
      if (addproductQuantity) {
        addproductQuantity.quantity += parseInt(action.payload.quantity, 10);
      } else {
        state.products.push({ ...action.payload, quantity: parseInt(action.payload.quantity, 10) });
      }
      state.productNumber += parseInt(action.payload.quantity, 10);
    },
    removeFromCart: (state, action) => {
      const productToRemove = state.products.find((product) => product.id === action.payload);
      state.productNumber -= productToRemove.quantity;
      const indexOfRemoveProduct = state.products.findIndex(
        (product) => product.id === action.payload,
      );
      state.products.splice(indexOfRemoveProduct, 1);
    },
    increaseProductQuantity: (state, action) => {
      const increaseProduct = state.products.find((product) => product.id === action.payload);
      increaseProduct.quantity += 1;
      state.productNumber += 1;
    },
    decreaseProductQuantity: (state, action) => {
      const decreaseProduct = state.products.find((product) => product.id === action.payload);
      if (decreaseProduct.quantity > 1) {
        decreaseProduct.quantity -= 1;
      } else {
        const indexOfRemoveProduct = state.products.findIndex((prod) => prod.id === action.payload);
        state.products.splice(indexOfRemoveProduct, 1);
      }

      state.productNumber -= 1;
    },
  },
});

export const {
  addToCart, removeFromCart,
  increaseProductQuantity, decreaseProductQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
