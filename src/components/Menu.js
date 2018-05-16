import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import './Menu.css';
import Images from '../utils/Images';
import { toggleMenu } from '../store/actions/CartMenuActions';

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
      {title: 'BLOG'}
    ];
  }

  _openSideMenu = () => {
    this.props.toggleMenu(this.props.isMenuOpen);
  }

  render() {
    return (
      <div className="itemContainer">
        {this.MENU_OPTIONS.map((item, index) =>
          <MenuItem
            key= {index}
            title={item.title}
            icon={item.icon}
            onPress={this._openSideMenu}
          />
        )}
        <MenuItem
          key="menubutton"
          icon={Images.cart}
          onPress={() => this._openSideMenu()}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isMenuOpen: state.menu.isMenuOpen
});

export default connect(mapStateToProps, { toggleMenu })(Menu);
