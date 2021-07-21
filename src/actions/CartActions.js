export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const RESET_CART = 'RESET_CART'

export const addToCart = (product, amount) => ({
  type: ADD_TO_CART,
  payload: {
    product,
    amount
  }
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: {
    productId
  }
});

export const resetCart = () => (
  {
    type: RESET_CART
  }
)
