import { createStore, combineReducers } from 'redux';

import ProductListReducers from './reducers/ProductListReducers';

const reducers = combineReducers({
  products: ProductListReducers
});

const store = createStore(reducers);
export default store;
