import './CartWidget.css';
import {MdOutlineShoppingBag} from 'react-icons/md'
import { CartContext } from '../../context/cartContext';
import { useContext } from 'react';

export default function CartWidget() {

  const { cart ,getQuantity } = useContext(CartContext)


  return (
    <div className="cart">
        <MdOutlineShoppingBag className='logo'/>
        {
          cart.length === 0 ?
          <h1 className="cartCont"></h1> :
          <h1 className="cartCont">{getQuantity()}</h1>
        }
    </div>

  );
}
