import React from 'react';
import PropTypes from 'prop-types';

import './ProductList.css';
import ProductItem from '../product-item/ProductItem';
const productList = require('../../utils/fixtures/product-list.json');

class ProductList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products: productList
    }
  }

  _renderProductList() {
    return this.state.products.map(({ name, id, price, color, size}) =>
      <ProductItem
        key={id}
        name={name}
        price={price}
        color={size}
      />
    );
  }

  render() {
    return (
      <div className="listContainer">
        {this._renderProductList()}
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.array
}

export default ProductList;
