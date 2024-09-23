import React from 'react';
import '../Components/NewCollection/NewCollection.css';
import all_product from '../Components/Assets/all_product';
import { Items } from '../Components/Items/Items';

export const Women = () => {
  const womenProducts = all_product.filter(item => item.category === 'women');

  return (
    <div className='new-collections'>
      <h1>WOMEN COLLECTION</h1>
      <div className='collection'>
        {womenProducts.map((item, i) => {
          return (
            <Items key={i} id={item.id} name={item.name} image={item.image} price_new={item.new_price} price_old={item.old_price} />
          )
        })}
      </div>
    </div>
  )
}
