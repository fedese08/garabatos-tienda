import { addDoc, collection } from 'firebase/firestore';
import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/cartContext';
import { db } from '../../firebase';
import './CartForm.css'

export default function CartForm({setOrderId}) {

    const { cart, deleteAll, getTotal } = useContext(CartContext);


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [adress, setAdress] = useState("")
    const [loading, setLoading] = useState(false)
    
    const handleSubmit = (event) => {
      event.preventDefault();
      if (![name,email,phone,adress].some(field => field === "")){ // Compruebo que los campos esten completos
        setLoading(true);
      
        const newOrder = {
          buyer: { name, email, phone, adress },
          date: new Date(),
          items: cart,
          totalPrice: getTotal()
        }
      
        addDoc(collection(db, 'orders'), newOrder).then((res)=>{
          setOrderId(res.id)
        }).catch((err)=>{
          console.log(err)
        }).finally(()=>{
          setLoading(false);
          deleteAll();
        })
        
      }else { 
        alert("Completa todos los campos")
      }
    }

  return (
    <div className="cart-form">
        <h1>Completa todos los datos</h1>
        <form onSubmit={handleSubmit}>
            <input onChange={(e) => setName(e.target.value)} value={name} placeholder="Nombre y apellido" type="text"/>
            <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" type="email"/>
            <input onChange={(e) => setPhone(e.target.value)} value={phone} placeholder="Telefono" type="number"/>
            <input onChange={(e) => setAdress(e.target.value)} value={adress} placeholder="Direccion" type="text"/>
            <button type='submit'>
                {loading
                ? 'Se esta generando su orden'
                : 'Finalizar compra'
                }
            </button>
        </form>
    </div>
  )
}
