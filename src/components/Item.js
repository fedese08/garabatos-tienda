import React from 'react';
import './Item.css'

export default function Item({item}) {
  return (
    <div className='product'>
        <img src={item.imageURL} alt="Imagen detallada del producto"/>
        <p className="title">{item.title}</p>
        <p className="price">${item.price}</p>
    </div>
  );
}
