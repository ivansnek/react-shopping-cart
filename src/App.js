import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import ProductList from './containers/product-list/ProductList';
import { Header } from './components';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <ProductList />
        </div>
      </Provider>
    );
  }
}

export default App;
