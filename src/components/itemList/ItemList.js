import Item from '../item/Item';
import './ItemList.css'

export default function ItemList({products, getItem}) {

  return (
    <div className='products'>

      {
        products.map(item =>{
          return (
              <Item key={item.id} item={item} getItem={getItem}/>
            )
        })
      }
       
    </div>
  );
}
