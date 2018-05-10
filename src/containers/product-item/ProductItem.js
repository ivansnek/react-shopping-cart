import React from 'react';
import PropTypes from 'prop-types';

import './ProductItem.css';
import { Button} from '../../components';
import Images from '../../utils/Images';

class ProductItem extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    size: PropTypes.string,
    color: PropTypes.string,
    description: PropTypes.string,
    addItem: PropTypes.func
  };

  constructor(props) {
    super(props);
  }

  _addProduct = () => {
    // this.props.addItem();
  }
  render() {
    const { name, price, color, size, description } = this.props;
    return (
      <div className="itemContainer">
        <img src={Images.shirt} alt='Image' className='logoImage'/>
        <div className="itemDescription">
          <h2>{name}</h2>
          <span>Price:{price}</span>
          <span>Size:{size}</span>
          <span>Color:{color}</span>
          <span>Description{description}</span>
          <Button color="black" onPress={this._addProduct}>
            Add to Cart
          </Button>
        </div>
      </div>
    );
  }
}

export default ProductItem;
