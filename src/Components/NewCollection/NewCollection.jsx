import React from 'react';
import './NewCollection.css'
import new_collections from '../Assets/new_collections';
import { Items } from '../Items/Items';

export const NewCollection = () => {
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTION</h1>
      <div className='collection'>
        {new_collections.map((item, i) => {
          return (
            <Items key={i} id={item.id} name={item.name} image={item.image} price_new={item.new_price} price_old={item.old_price} />
          )
        })}
      </div>
    </div>
  )
}
