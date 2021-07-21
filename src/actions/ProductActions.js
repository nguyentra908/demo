import productsData from "../services/data/products";
import _ from 'lodash';

export const SELECT_PRODUCT = 'SELECT_PRODUCT';
export const SET_LIST_PRODUCT_PAGINATION = "SET_LIST_PRODUCT_PAGINATION";
export const RESET_LIST_PRODUCT_PAGINATION = "RESET_LIST_PRODUCT_PAGINATION";
export const selectProduct = product => ({
  type: SELECT_PRODUCT,
  payload: { product }
});

export function getProductInfo(id) {
  return dispatch => {
    dispatch(selectProduct(productsData.find(e => e.id === id)));
  };
}

export function filterProductList({ filterPrice, filterCategory, filterColor }) {
  const data = _.cloneDeep(productsData);
  let getProductInRangePrice = data.filter((item) => item.salePrice >= filterPrice.min && filterPrice.max >= item.salePrice)
  if (filterColor) {
    getProductInRangePrice = getProductInRangePrice.filter((item) => item.color === filterColor)
  }
  if(filterCategory){
    getProductInRangePrice = getProductInRangePrice.filter((item) => item.categoryId === filterCategory)
  }
  return getProductInRangePrice;

}


export function setProductPagination(productList) {
  if(!productList || (productList && !productList.length)) return [];
  const limit = 15;
  const numPage = Math.floor(productList.length / limit);
  const productPagination = [];
  for (let index = 0; index <= numPage; index++) {
    productPagination.push({page: index, productList: productList.slice(index * limit, index * limit + limit)});
  }
  return productPagination;
}