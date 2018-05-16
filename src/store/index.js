import { createStore, combineReducers } from 'redux';

import ProductListReducers from './reducers/ProductListReducers';
import CartMenuReducers from './reducers/CartMenuReducers';

const reducers = combineReducers({
  products: ProductListReducers,
  menu: CartMenuReducers
});

const store = createStore(reducers);
export default store;
