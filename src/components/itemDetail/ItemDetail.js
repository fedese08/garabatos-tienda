import React from 'react';
import ItemCount from '../itemCount/ItemCount';

import './ItemDetail.css'

export default function ItemDetail({item,onAdd}) {
  return (
    <div className="detail-container">
        <div className="images">
            <img className="main-img" src={item.imageURL}/>
            <div className="extraImg">
                <img src={item.imageURL}/>
                <img src={item.imageURL}/>
                <img src={item.imageURL}/>
                <img src={item.imageURL}/>
            </div>
        </div>
        <div className="details">
            <h2>{item.title}</h2>
            <h1>${item.price}</h1>
            <p className="desc">{item.description}</p>
            <ItemCount className="itemCount" stock={5} initial={0} onAdd={onAdd}/>
        </div>
    </div>
  );
}
