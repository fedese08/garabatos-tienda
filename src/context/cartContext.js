import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ( {children} ) => {
    
    
    const [ cart, setCart ] = useState([]);

    const addToCart= (item, quantity) => {
		if(isInCart(item.id)) {     // Si el producto ya existe en el carrito, lo sumo
			const updateQuantity = [...cart]
			updateQuantity.forEach(cartItem => {
				if(cartItem.id === item.id ) {
					cartItem.quantity += 1
				}
			})
			return setCart(updateQuantity)
		}
		return setCart([...cart, {...item, quantity}])  // Si no...
	}

	const isInCart = (id) => { // Verifico la existencia del producto en el carrito
		const findItem = cart.find((cartItem) => {
			return cartItem.id === id
		})
		return findItem
	}


	const deleteItem = (id) => {  // Elimino el producto el carrito
		const items = [...cart]
		const filterItems = items.filter(cartItem => cartItem.id !== id)
		return setCart(filterItems)
	}


    const deleteAll = () => {
        setCart([]); // Limpio el array de productos
    }

    const getTotal = () => { // recorro el carrito y calculo el total
        var total = 0;
        for ( var i = 0; i < cart.length; i++ ) {
            total+= (cart[i].price * cart[i].quantity)
        }
        return total;
    }

    const getQuantity = () =>{ // Devuelvo la cantidad de productos en el carrito
        let Quantity = 0;
        for(let i = 0; i < cart.length; i++){
            Quantity += cart[i].quantity
        };
        return Quantity;
    }

    return (
        <CartContext.Provider value={{cart , addToCart, deleteItem, deleteAll, getTotal, getQuantity }}>
            {children}
        </CartContext.Provider>
    )
    
}

export default CartContextProvider;