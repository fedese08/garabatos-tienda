import React from 'react';
import Item from '../item/Item';
import './ItemList.css'

export default function ItemList({products, getItem}) {


  return (
    <div className='products'>

    {/* Devuelvo un componente item por cada producto */}
      {
        products.map(item =>{
            return (
                <Item key={item.id} item={item} getItem={getItem}/>
            )
        })
      }
       
    </div>
  );
}
