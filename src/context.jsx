import React, { createContext, useState } from 'react'

export const CartContext = createContext()

//Proveedor del contexto
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    //Agrega elementos al carrito
    const addToCart = (element) => {
        setCart([...cart, element ])
    }

    return (

        //Proveedor del contexto
        <CartContext.Provider value={{
            cart,
            addToCart,
        }}>
            { children }

        </CartContext.Provider>
    )

}

export default CartProvider

