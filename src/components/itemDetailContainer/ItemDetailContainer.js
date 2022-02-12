import React, { useEffect, useState } from 'react';
import './ItemDetailContainer.css'

import { getItems } from '../../assets/apis/api'
import ItemDetail from '../itemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer({changeCount}) {

    const [item, setItem] = useState([]);
    

    const { itemId } = useParams();

    useEffect(() => {
        getItems().then((item) => {
            setItem(item.find((i) => (i.id).toString() === itemId));
        })
    }, [])
    
  return (
    <div>
      {        
        item.length === 0 ? 
        <p>Cargando producto...</p> :
        <ItemDetail item={item} changeCount={changeCount}/>
        }
        
    </div>
  );
}
