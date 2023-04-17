import React from 'react'
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { Products } from 'components/Products'
import { Cart } from 'components/Cart'
import { cart } from 'reducers/cart';
import { products } from 'reducers/products';

/* Standard redux-way to set up state by combining reducers and then configuring store
based on combination */
const reducer = combineReducers({
  cart: cart.reducer,
  products: products.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Cart />
      <Products />
    </Provider>
  )
};

