import React, { useEffect, useState } from 'react';
import './ItemDetailContainer.css'

import { getItems } from '../../assets/apis/api'
import ItemDetail from '../itemDetail/ItemDetail';

export default function ItemDetailContainer({onAdd}) {

    const [item, setItem] = useState([]);

    useEffect(() => {
        getItems().then((item) => {
            setItem(item.find((i) => i.id === 1));
        })
    })
    
  return (
    <div>
        <ItemDetail item={item} onAdd={onAdd}/>
    </div>
  );
}
