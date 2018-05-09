import React from 'react';
import PropTypes from 'prop-types';

import './Menu.css';

const MenuItem = ({ title }) => (
  <div className='menuItem'>
    <span>{title}</span>
  </div>
)

class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.MENU_OPTIONS = [
      'HOME',
      'SHOP',
      'BLOG'
    ];
  }

  render() {
    return (
      <div className="itemContainer">
        {this.MENU_OPTIONS.map((item, index) => <MenuItem key= {index} title={item}/> )}
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
