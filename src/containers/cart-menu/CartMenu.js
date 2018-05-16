import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//Actions
import { addProduct, deleteProduct } from '../../store/actions/ProductListActions';
import { toggleMenu } from '../../store/actions/CartMenuActions';

import './CartMenu.css';
import CartItem from './CartItem';
const SideMenu = require('../../utils/fixtures/product-list.json');

class CartMenu extends React.Component {
  static propTypes = {
    products: PropTypes.array
  }

  _handleAddItem = (product) => {
    this.props.addProduct(product);
  }

  _handleDeleteItem = (product) => {
    this.props.deleteProduct(product);
  }

  _renderItems() {
    if (this.props.products) {
      return this.props.products.map(item =>
        <CartItem
          item={item}
          icon={item.icon}
          onAddItem={this._handleAddItem}
          onDeleteItem={this._handleDeleteItem}
        />
      );
    }
    return null;
  }

  _closeMenu = () => {
    const { toggleMenu, isMenuOpen } = this.props;
    toggleMenu(isMenuOpen);
  };

  render() {
    if (this.props.isMenuOpen) {
      return (
        <div className="cartContainer">
          <span className="info">{this.props.isMenuOpen}</span>
          <div className="buttonMenuContainer">
            <button onClick={this._closeMenu} className="buttonClose">X</button>
          </div>
          {this._renderItems()}
        </div>
      );
    }
    return null;
  }
}

const mapStateToProps = ({ products, menu }) => ({
  products: products.products,
  isMenuOpen: menu.isMenuOpen
});

export default connect(mapStateToProps, {
  addProduct,
  deleteProduct,
  toggleMenu
})(CartMenu);
