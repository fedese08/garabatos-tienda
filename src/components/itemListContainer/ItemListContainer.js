import React 
, { useEffect, useState } from 'react';
import ItemList from '../itemList/ItemList';
import './ItemListContainer.css'
import { getItems } from '../../assets/apis/api'
import { useParams } from 'react-router-dom';




export default function ItemListContainer({ onAdd }) {

  const [items, setItems] = useState([]);

  const { categoryName } = useParams();
  const { genderName } = useParams();
 

  useEffect(() => {

    // Busco los productos desde la API
    getItems().then((items) => {

      // Verifico el estado de la categoria, de no existir retorno todos los items
      if (!categoryName && !genderName) {
        setItems(items);
      } 
      else if (!genderName){
        const categoryItems = items.filter(item => item.category === categoryName);

        setItems(categoryItems);
        
      }
      else if (!categoryName){
        const genderItems = items.filter(item => {
          return item.gender === genderName ||
                item.gender === "unisex"

        });

        setItems(genderItems);
        
      }
    }).catch((err) => {
      console.log(err);
    })
    
  },[categoryName, genderName])


  return (
    <div >
      <div className="ItemList-Container">
      {
        items.length === 0 ? 
        <p>Cargando productos...</p> :
        <ItemList products={items}/>
      } 
      </div>
    </div>

  );
}
