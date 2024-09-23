import React from 'react';
import '../Components/NewCollection/NewCollection.css';
import all_product from '../Components/Assets/all_product';
import { Items } from '../Components/Items/Items';

export const Kids = () => {
  const kidsProducts = all_product.filter(item => item.category === 'kid');

  return (
    <div className='new-collections'>
      <h1>KIDS COLLECTION</h1>
      <div className='collection'>
        {kidsProducts.map((item, i) => {
          return (
            <Items key={i} id={item.id} name={item.name} image={item.image} price_new={item.new_price} price_old={item.old_price} />
          )
        })}
      </div>
    </div>
  )
}
