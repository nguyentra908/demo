import config from '../config';

// ACTION TYPE
export const FETCH_PRODUCTS_BEGIN   = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const FILTER_PRODUCTS= 'FILTER_PRODUCTS';

// FETCH
export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products }
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});

// FILTER
export const filterProducts = categoryId => ({
  type: FILTER_PRODUCTS,
  payload: { categoryId }
});

export function fetchProducts() {
  return dispatch => {
    dispatch(fetchProductsBegin());
    return fetch(config.url.product)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchProductsSuccess(json.body));
        return json.body;
      })
      .catch(error => dispatch(fetchProductsFailure(error)));
  };
}

export function filterProductsRequest(categoryId) {
  if (!categoryId) return;
  return dispatch => {
    dispatch(filterProducts(categoryId));
  }
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}