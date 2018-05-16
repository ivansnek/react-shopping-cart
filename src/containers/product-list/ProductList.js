import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//Actions
import { addProduct, deleteProduct } from '../../store/actions/ProductListActions';

import './ProductList.css';
import ProductItem from '../product-item/ProductItem';
import Images from '../../utils/Images';
const productList = require('../../utils/fixtures/product-list.json');

class ProductList extends React.Component {
  static propTypes = {
    products: PropTypes.array
  };

  constructor(props) {
    super(props);
    this.state = {
      products: productList
    }
  }

  _addProduct = product => {
    this.props.addProduct(product);
  }

  _renderProductList() {
    return this.state.products.map(({
      name,
      id,
      price,
      color,
      size,
      description
    }) =>
      <ProductItem
        key={id}
        name={name}
        price={price}
        color={color}
        size={size}
        icon={Images.shirt}
        description={description}
        addProduct={this._addProduct}
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

const mapStateToProps = state => ({
  products: state.products.products
})
export default connect(mapStateToProps, { addProduct, deleteProduct })(
  ProductList
);
