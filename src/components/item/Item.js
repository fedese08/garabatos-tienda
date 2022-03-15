import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css'

export default function Item({item}) {

  return (
    <Link to={"/item/"+item.id } className="linkRoute">
      <div className='product'>
          <img src={item.imageURL[0]} alt="Imagen detallada del producto"/>
          <p className="title">{item.title}</p>
          <p className="price">${item.price}</p>
      </div>
    </Link>
  );
}
