import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import './Cart.css'
import CartForm from '../cartForm/CartForm';
import orderGif from '../../assets/images/receive-order.gif';


export default function Cart() {

    const { cart, deleteItem, deleteAll, getTotal } = useContext(CartContext);

    const [orderId, setOrderId] = useState("")

    const showForm = () => {
      document.getElementById('cartForm').classList.add('showform')
      // document.getElementById('btnFinish').classList.add('hide')
    }

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
    <div className="container">
        <h1 className="cartText">CARRITO DE COMPRAS</h1>
        {
          cart.length === 0 ? // Si el carrito esta vacio...
          <div>
            <p>El carrito esta vacio.</p>
            
            <Link to="/"><p>Volver al inicio.</p></Link>
          </div> :
  
          <div>
            <div className = "cartTable">
              <ul className='tableCat'>
                <li className = "prodInfo"><p>PRODUCTO</p></li>
                <li className = "priceText"><p>PRECIO</p></li>
                <li className = "quantText"><p>CANTIDAD</p></li>
              </ul>
              {
                cart.map(cartItem =>( // Si el carrito no esta vacio, muestro la lista de productos
                  <ul className="prod-cart">
                    <li key={cartItem.id} className="prodInfo" >
                      <div className="prodInfo">
                        <img src={cartItem.imageURL[0]}/>
                        <p className = "prodText">{cartItem.title}</p>  
                      </div>
                    </li>
                      <li className = "priceText">${cartItem.price}</li>
                      <li className = "quantText">x{cartItem.quantity}</li>
                      <button id="delete" onClick={()=> deleteItem(cartItem.id)}>X</button>
                  </ul>
                ))
              }
              <div className="total-buttons">
                <div className="totalPrice">
                  <p>Total: </p>  
                  <h2>${getTotal()}</h2> 
                </div> 
                  <div className="buttons">
                      {/* <button id='btnFinish' onChange={showForm()}>FINALIZAR COMPRA</button>, */}
                      <button id="btnClean" onClick={deleteAll}>LIMPIAR CARRITO</button>
                    </div>
              </div>
            </div>
            <div id='cartForm'>
              <CartForm setOrderId={setOrderId}/>
            </div>
          </div>
            }

          
    </div>
  )
}
