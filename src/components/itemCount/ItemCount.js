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
        if (itemCounter != 0){
            onAdd(itemCounter)
        }
    }


  return (
    <div className="item-count-container">
        <div className="item-count">
            <button onClick={lessBtn}>-</button>
            <p>{itemCounter}</p>
            <button onClick={addBtn}>+</button>
        </div>
        {
            itemCounter != 0 
            ? <button id="btnAddCart" onClick={add}>Agregar al carrito</button>
            : <button id="btnAddCartBlock" onClick={add}>Agregar al carrito</button>
        }
    </div>

  );

}
