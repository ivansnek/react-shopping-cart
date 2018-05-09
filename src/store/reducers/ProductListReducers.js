import { ADD_PRODUCT, DELETE_PRODUCT } from '../actions/ProductListActions';

const initialState = {
  products: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [ ...state.products, action.payload ]
      }
    case DELETE_PRODUCT:
      let newProducts = state.products.map(item => item.id !== action.payload.id);
      return {
        ...state,
        products: newProducts
      }
    default: {
      return state;
    }
  }
};