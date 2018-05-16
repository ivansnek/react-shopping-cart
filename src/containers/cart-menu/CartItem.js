import React from 'react';

import './CartItem.css';
import Images from '../../utils/Images';

export default function({ item, icon, onAddItem, onDeleteItem }){
  return (
    <div className='itemCartContainer'>
      <img src={icon} alt='Logo' className='logoCartImage'/>
      <div className="itemCartInfo">
        <span className="itemLabel">{item.name}</span>
        <span className="itemSubLabel">{item.size}/{item.color}</span>
      </div>
      <div className="itemCartPrice">
        <span className="itemLabel">${item.price}</span>
      </div>
    </div>
  )
}