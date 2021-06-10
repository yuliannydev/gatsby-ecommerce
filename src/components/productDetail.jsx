import React, { useState, useContext } from 'react'
import priceFormat from '../utils/priceFormat'
import { 
    SizeButton, 
    SizeSelect, 
    QtySelect, 
    StyledProductDetail, 
    Button,
    Tag
} from '../styles/componensts'
import { Seo, Starts } from '.'
import { CartContext } from '../context'


const productDetail = ({ unit_amount: price, id, product: {name, description, images, metadata }}) => {

    const formatPrice = priceFormat(price)
    const [size, setSize] = useState(2)
    const [qty, setQty] = useState(1)

    //Contexto del carrito
    const { addToCart} = useContext(CartContext)

    //Agregar elementos al carrito
    const handleSubmit = () => {
        addToCart({ unit_amount: price, id, qty, name, images, metadata })
    }
    return (
        <StyledProductDetail>
            <Seo title={name} />
             <img src={images} alt={name} /> 
            <div>
                <Tag>Popular</Tag>
                <h1>{name}</h1>
                <b>{formatPrice}</b>
                <Starts/>
                {/* {metadata.wear && <h3>Color: </h3>} */}
                <small>{description}</small>

                {metadata.wear && (
                    <SizeSelect select={size}>
                        <SizeButton onClick={() => setSize(1)}>XS</SizeButton>
                        <SizeButton onClick={() => setSize(2)}>S</SizeButton>
                        <SizeButton onClick={() => setSize(3)}>M</SizeButton>
                        <SizeButton onClick={() => setSize(4)}>L</SizeButton>
                        <SizeButton onClick={() => setSize(5)}>XL</SizeButton>
                    </SizeSelect>
                )}
                <h4>Quantity:</h4>

                <QtySelect>
                    <button onClick={() => (qty > 1 ? setQty(qty-1): null)}>-</button>
                    <input type='text' disabled value={qty} />
                    <button onClick={() => setQty(qty + 1)}>+</button>
                </QtySelect>

                <Button onClick={handleSubmit}>Add to cart 🛒</Button>
            </div>
        </StyledProductDetail>
    )
}

export default productDetail
