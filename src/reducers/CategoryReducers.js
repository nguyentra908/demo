import {
  FETCH_CATEGORIES_BEGIN,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE
} from '../actions/CategoryActions';
import categories from '../services/data/categories';
const initialState = {
  items: categories,
  loading: false,
  error: null
};

const CategoryReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    
    case FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };

    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        items: action.payload.categories
      };

    default:
      return state;
  }
}

export default CategoryReducers;
