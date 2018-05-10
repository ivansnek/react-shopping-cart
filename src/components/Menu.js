import React from 'react';
import PropTypes from 'prop-types';

import './Menu.css';
import Images from '../utils/Images';

const MenuItem = ({ title, icon, onPress }) => (
  <div className='menuItem' onClick={onPress}>
    {title && (<span>{title}</span>)}
    {icon && (<img src={icon} alt='Cart' className='cartImage'/>)}
  </div>
)

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.MENU_OPTIONS = [
      {title: 'HOME'},
      {title: 'SHOP'},
      {title: 'BLOG'},
      {icon: Images.cart}
    ];
  }

  _openSideMenu = () => {

  }

  render() {
    return (
      <div className="itemContainer">
        {this.MENU_OPTIONS.map((item, index) =>
          <MenuItem key= {index} title={item.title} icon={item.icon} />
        )}
      </div>
    );
  }
}

Menu.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  size: PropTypes.string,
  color: PropTypes.color
}

export default Menu;
