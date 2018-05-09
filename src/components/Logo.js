import React from 'react';
import './Logo.css';

export default function(){
  return (
    <div className='logoContainer'>
      <img src={require('../assets/logo.png')} alt='Logo' className='logoImage'/>
    </div>
  )
}