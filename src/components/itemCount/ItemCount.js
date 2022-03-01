import React, { useState } from 'react';
import './ItemCount.css'



export default function ItemCount({stock,initial,onAdd}) {


    const [itemCounter, setItemCounter] = useState(initial);

    const lessBtn = () => {
        if (itemCounter > 0) {
            setItemCounter(itemCounter - 1);
        }
    }
    
    const addBtn = () => {
        if (itemCounter < stock){
            setItemCounter(itemCounter + 1);
        }
    }

    const add = () => {
        onAdd(itemCounter)
    }


  return (
    <div className="item-count-container">
        <div className="item-count">
            <button onClick={lessBtn}>-</button>
            <p>{itemCounter}</p>
            <button onClick={addBtn}>+</button>
        </div>
        <button id="btnAddCart" onClick={add}>Agregar al carrito</button>
    </div>

  );

}
