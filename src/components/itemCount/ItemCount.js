import React, { useState , useEffect } from 'react';
import './ItemCount.css'



export default function ItemCount({stock,initial,onAdd}) {


    const [count, setCount] = useState(initial);

    const lessBtn = () => {
        setCount(count - 1);
        if (count <= 0) {
            setCount(0);
        }
    }
    
    const addBtn = () => {
        setCount(count + 1);
        if (count >= stock){
            setCount(stock);
        }
    }

    const add = () => {
        onAdd(count)
    }


  return (
    <div className="item-count-container">
        <div className="item-count">
            <button onClick={lessBtn}>-</button>
            <p>{count}</p>
            <button onClick={addBtn}>+</button>
        </div>
        <button id="btnAddCart" onClick={add}>Agregar al carrito</button>
    </div>

  );

}
