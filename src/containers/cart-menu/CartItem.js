import React from 'react';

import './CartItem.css';
import Images from '../../utils/Images';

export default function({ name, icon, price, color, size, quantity}){
  return (
    <div className='itemContainer'>
      <img src={Images.logo} alt='Logo' className='logoImage'/>
      <div className="itemContainer">
        <span className="itemLabel">{name}</span>
      </div>
    </div>
  )
}