import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import './Cart.css'
import CartForm from '../cartForm/CartForm';
import orderGif from '../../assets/images/receive-order.gif';


export default function Cart() {

    const { cart, deleteItem, deleteAll, getTotal } = useContext(CartContext);

    const [orderId, setOrderId] = useState("")


    if ( orderId !== ''){
      return (
        <div className="thanks-msj">
          <h1>GRACIAS POR TU COMPRA!</h1>
          <h2>Tu codigo de orden es: {orderId}</h2>
          <Link to="/"><h2>Volver al inicio</h2></Link>
          <img src={orderGif}/>
        </div>
       )
    }

    
  return (
    <div>
      <h1 className="cartText">CARRITO</h1>
      {
        cart.length === 0 ? // Si el carrito esta vacio...
        <div>
          <p>El carrito esta vacio.</p>
          
          <Link to="/"><p>Volver al inicio.</p></Link>
        </div> :

        <div  className = "cartTable">
          <ul>
            <li className = "cartTitles">
              <p className = "prodText">Producto</p>
              <p className = "priceText">Precio</p>
              <p className = "quantText">Cant.</p>
            </li>
          </ul>
          <ul>
          {
            cart.map(cartItem =>( // Si el carrito no esta vacio, muestro la lista de productos
              <li key={cartItem.id} className="prod-cart">
                <p className = "prodText">{cartItem.title}</p>
                <p className = "priceText">${cartItem.price}</p>
                <p className = "quantText">x{cartItem.quantity}</p>
                <button id="delete" onClick={()=> deleteItem(cartItem.id)}>X</button>
              </li>
            ))
          }
          </ul>
          <div className="totalPrice">
            <p>Total: </p>  
            <p>${getTotal()}</p>  
          </div>
          <div>
            <button id="btnClean" onClick={deleteAll}>Limpiar Carrito</button>
          </div>
          <CartForm setOrderId={setOrderId}/>
        </div>
      }

    </div>
  )
}
