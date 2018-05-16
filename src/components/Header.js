import React from 'react';

import Logo from './Logo';
import Menu from './Menu';

import './Header.css';

export default function(){
  return (
    <div className='headerContainer'>
      <Logo />
      <Menu />
    </div>
  )
}