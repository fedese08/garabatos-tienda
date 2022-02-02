import React 
, { useEffect, useState } from 'react';
import ItemCount from '../itemCount/ItemCount'
import ItemList from '../itemList/ItemList';
import './ItemListContainer.css'
import { getItems } from '../../assets/apis/api'



export default function ItemListContainer({ onAdd }) {

  const [items, setItems] = useState([]);


  useEffect(() => {
    getItems().then((items) => {
      setItems(items);
    }).catch((err) => {
      console.log(err);
    })
  },[])


  return (
    <div >
      <div className="ItemList-Container">
      {
        items.length === 0 ? 
        <p>Cargando productos...</p> :
        <ItemList products={items}/>
      }
        <ItemCount stock={5} initial={0} onAdd={onAdd}/>    
      </div>
    </div>

  );
}
