import {
  SELECT_PRODUCT, SET_LIST_PRODUCT_PAGINATION, setProductPagination, RESET_LIST_PRODUCT_PAGINATION
} from '../actions/ProductActions';
import productData from '../services/data/products';

const initialState = {
  products: productData,
  pagination: null,
  item: null,
  listProductPagination: setProductPagination(productData)
};

const ProductReducers = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PRODUCT:
      return {
        ...state,
        item: action.payload.product
      };
    
    case SET_LIST_PRODUCT_PAGINATION: {
      return {
        ...state,
        listProductPagination: action.payload.listProductPagination
      }
    }

    case RESET_LIST_PRODUCT_PAGINATION: {
      return {
        ...state,
        listProductPagination: setProductPagination(productData)
      }
    }

    default:
      return state;
  }
}

export default ProductReducers;
