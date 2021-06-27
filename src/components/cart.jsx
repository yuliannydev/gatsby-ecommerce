import React, { useContext, useState, useEffect } from 'react'
import { Link } from "gatsby"
import { Button, StyledCart } from "../styles/componensts"
import priceFormat from '../utils/priceFormat'
import { CartContext } from '../context'

const CartView = () => {
    
    const { cart } = useContext(CartContext)
    const [total, setTotal] = useState(0)
    
    const [stripe, setStripe] = useState()

    const getTotal = () => {
        setTotal(
            cart.reduce((accumulator, current) => accumulator + current.unit_amount * current.qty, 0)
        )
    }

    useEffect(() => {
        {
            setStripe(
                window.Stripe(process.env.STRIPE_PK)
                )
            getTotal()
        }
    }, []);

    const handleSubmit = async (event) => {

        event.preventDefault()

        let items = cart.map(({id, quantity}) => ({
            price: id, 
            quantity: 1,
        }))

 
        const { error } = await stripe.redirectToCheckout({
            
            lineItems: items,
            mode: "subscription",
            successUrl: process.env.SUCCESS_REDIRECT,
            cancelUrl: process.env.CANCEL_REDIRECT,
        })
        if (error) {
            throw new Error(error.message)
        }
    }

    return (
        <StyledCart>
            <h2>Shop Cart</h2>
           <table>
               <tbody>
                   <tr>
                       <th>Product</th>
                       <th>Price</th>
                       <th>Quantity</th>
                       <th>Total</th>
                   </tr>
                   {cart.map((swag) => (
                       <tr key={swag.id}>
                           <td>
                               <img 
                               src={swag.images}
                               alt={swag.name}
                               />
                               {swag.name}
                           </td>
                           <td>USD {priceFormat(swag.unit_amount)}</td>
                           <td>{swag.qty}</td>
                           <td>{priceFormat(swag.qty * swag.unit_amount)}</td>
                       </tr>
                   ))}
               </tbody>
           </table>
           <nav>
               <div>
                   <h3>Subtotal:</h3>
                   <small>USD {priceFormat(total)}</small>
               </div>
               <div>
                   <Link to='/'>
                       <Button type='outline'>Back</Button>
                   </Link>
                   <Button onClick={handleSubmit} /* disabled={cart.length === 0 } */>Buy</Button>
               </div>
           </nav>
        </StyledCart>
    )
}

export default CartView
