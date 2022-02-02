import React from 'react';
import './Item.css'

export default function Item({item, getItem}) {

  const selectItem = () => {
      getItem(item);
  }

  return (
    <div className='product'>
        <img src={item.imageURL} alt="Imagen detallada del producto"/>
        <p className="title">{item.title}</p>
        <p className="price">${item.price}</p>

        <button onClick={selectItem}>Ver producto</button>
    </div>
  );
}
