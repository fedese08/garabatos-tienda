import React from 'react';
import Item from './Item';
import './ItemList.css'

export default function ItemList({products}) {
  return (
    <div className='products'>
      {

        products.map(item =>{
            console.log(item);
            return (
                <Item key={item.id} item={item}/>
            )
        })
      }
       
    </div>
  );
}
