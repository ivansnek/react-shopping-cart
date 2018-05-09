import React from 'react';
import PropTypes from 'prop-types';

import './ProductItem.css';

class ProductItem extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="itemContainer">
        <img src={require('../../assets/tshirt.png')} alt='Image' className='logoImage'/>
        {this.props.name}
      </div>
    );
  }
}

ProductItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  size: PropTypes.string,
  color: PropTypes.string,
  description: PropTypes.string
}

export default ProductItem;
