import React from 'react';
import './Items.css'

export const Items = (props) => {
  return (
    <div className='item'>
      <img src={props.image} alt=''/>
      <p>{props.name}</p>
      <div className='item-price'>
      <div className='item-price-new'>{props.price_new}</div>
      <div className='item-price-old'>{props.price_old}</div>
      </div>
    </div>
  )
}

