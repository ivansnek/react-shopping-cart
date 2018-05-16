import React from 'react';
import './Button.css';

export default function({ onPress, children }){
  return (
    <div className="buttonContainer" onClick={onPress}>

      <span>{children}</span>
    </div>
  )
}