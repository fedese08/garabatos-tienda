import React 
, { useEffect, useState } from 'react';
import ItemCount from './ItemCount'
import ItemList from './ItemList';
import './ItemListContainer.css'
import { products } from '../apis/api'



export default function ItemListContainer({ onAdd }) {

  const [items, setItems] = useState([]);

  useEffect(() => {
    // console.log(products);
    setItems(products);

  },[])

  return (
    <div className="ItemList-Container">
      <ItemList products={items}/>
      <ItemCount stock={5} initial={0} onAdd={onAdd}/>
    </div>
  );
}
