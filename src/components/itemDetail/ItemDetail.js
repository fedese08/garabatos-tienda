import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import ItemCount from '../itemCount/ItemCount';
import './ItemDetail.css'




export default function ItemDetail({item}) {

  const [mainImg, setMainImg] = useState(item.imageURL[0]);

  const { addToCart } = useContext(CartContext);


  function onAdd(quantity) {
    addToCart(item, quantity);
  }


  const changeImg = (img) => {
    setMainImg(img)
  } 
  var imgKey = 0;

  return (
    <div className="detail-container">
        <div className="images">
            <img id="imageBox" className="main-img" src={mainImg}/>
            <div className="extraImg">
              {
                item.imageURL.map(img => {
                  {imgKey++;}
                  return (
                    <img key={imgKey} src={img} onClick={function() {changeImg(img)}}/>
                  )
                })}
            </div>
        </div>
          <div className="details">
              <h2>{item.title}</h2>
              <h1>${item.price}</h1>
              <p className="desc">{item.description}</p>
              <ItemCount className="itemCount" stock={item.stock} initial={0} onAdd={onAdd}/>
              <Link to='/cart'>
                <button className="goCartBtn">Ir al carrito</button>
              </Link>
          </div>
    </div>
  );
}
