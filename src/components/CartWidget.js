import React from 'react';
import './CartWidget.css';
import {MdOutlineShoppingBag} from 'react-icons/md'

export default function CartWidget({cartCount}) {



  return (
    <div className="cart">
        {/* <img className="cartImg" src="https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/64/000000/external-trolley-cart-ecommerce-kmg-design-detailed-outline-kmg-design-1.png"/> */}
        <MdOutlineShoppingBag className='logo'/>
        <h1 className="cartCont">{cartCount}</h1>
    </div>
  );
}
