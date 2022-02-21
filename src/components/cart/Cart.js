import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import './Cart.css'

export default function Cart() {

    const { cart, deleteItem, deleteAll, getTotal } = useContext(CartContext);
    
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
                {/* <img scr={cartItem.imageURL}/> */}
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
            <button id="btnBuy" >Finalizar Compra</button>
          </div>
        </div>
      }

    </div>
  )
}
