import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import ProductList from './containers/product-list/ProductList';
import CartMenu from './containers/cart-menu/CartMenu';
import { Header } from './components';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="Container">
          <div className="App">
            <Header />
            <ProductList />
          </div>
          <CartMenu />
        </div>
      </Provider>
    );
  }
}

export default App;
