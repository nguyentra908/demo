import * as _ from 'lodash';

import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  RESET_CART
} from '../actions/CartActions';

const initialState = {
  items: [],
  total: 0,
  totalPrice: 0
};
// you should not do the business logic inside the reducer
const CartReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const items = state.items;
      let total = state.total;
      const { product, amount } = action.payload;
      const idx = _.findIndex(items, (item) => {
        return item.product.id === product.id;
      });
      if (idx === -1) {
        items.push({
          product,
          amount: +amount
        });
      } else {
        items[idx].amount += +amount;
        if (items[idx].amount <= 0) {
          items.splice(idx, 1);
        }
      }

      return {
        items,
        total: total + +amount,
        totalPrice: state.totalPrice + product.salePrice * +amount
      }
    }

    case REMOVE_FROM_CART: {
      const items = state.items;
      let total = state.total;
      let totalPrice = state.totalPrice;
      const { productId } = action.payload;
      const idx = _.findIndex(items, (item) => {
        return item.product.id === productId;
      });

      if (idx !== -1) {
        total -= items[idx].amount;
        totalPrice -= items[idx].product.salePrice * items[idx].amount;
        items.splice(idx, 1);
      }

      return {
        items,
        total,
        totalPrice
      }
    }

    case RESET_CART:
      return {
        items: [],
        total: 0,
        totalPrice: 0
      }

    default:
      return state;
  }
}

export default CartReducers;
