import { useEffect, useState } from 'react';
import ItemList from '../itemList/ItemList';
import './ItemListContainer.css'
import { getItems } from '../../assets/apis/api'
import { useParams } from 'react-router-dom';





export default function ItemListContainer({ onAdd }) {

  const [items, setItems] = useState([]);

  const { categoryName } = useParams();
  const { genderName } = useParams();
  const { brandName } = useParams();
 


  useEffect(() => {

    // Busco los productos desde la API
    getItems().then((items) => {

      // Verifico el estado de la categoria, de no existir retorno todos los items
      if (!categoryName && !genderName && !brandName) {
        setItems(items);
      } 
      else if (categoryName) {
        const categoryItems = items.filter(item => item.category === categoryName);

        setItems(categoryItems);


      }
      else if (genderName) {
        const genderItems = items.filter(item => {
          return item.gender === genderName ||
                item.gender === "unisex"

        });
        setItems(genderItems);

      }
      else if (brandName) {
        const brandItems = items.filter(item => item.brand === brandName);

        setItems(brandItems);
      }

    }).catch((err) => {
      console.log(err);
    })
    
  },[categoryName, genderName, brandName])


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
