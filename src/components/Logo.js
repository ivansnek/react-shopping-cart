import React from 'react';

import './Logo.css';
import Images from '../utils/Images';

export default function(){
  return (
    <div className='logoContainer'>
      <img src={Images.logo} alt='Logo' className='logoImage'/>
    </div>
  )
}