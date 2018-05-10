import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//Actions
import { addProduct, deleteProduct } from '../../store/actions/ProductListActions';

import './CartMenu.css';
import CartItem from './CartItem';
const SideMenu = require('../../utils/fixtures/product-list.json');

class CartMenu extends React.Component {
  static propTypes = {
    products: PropTypes.array
  }
  constructor(props) {
    super(props);
  }

  _handleAddItem = (product) => {
    this.props.addProduct(product);
  }

  _handleDeleteItem = (product) => {
    this.props.deleteProduct(product);
  }

  _renderItems() {
    if (this.props.products) {
      console.log('props',this.props)
      return this.props.products.map(item =>
        <CartItem
          item={item}
          onAddItem={this._handleAddItem}
          onDeleteItem={this._handleDeleteItem}
        />
        )
    }
    return null;
  }

  render() {
    return (
      <div className="cartContainer">
        {this._renderItems()}
      </div>
    );
  }
}

CartMenu.propTypes = {
  products: PropTypes.array
}

const mapStateToProps = ({ products}) => ({ products: products.products });

export default connect(mapStateToProps, { addProduct, deleteProduct })(CartMenu);
