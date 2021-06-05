import React, { useState } from 'react'
import priceFormat from '../utils/priceFormat'
import { 
    Tag, 
    SizeButton, 
    QtyButton, 
    SizeSelect, 
    QtySelect, 
    Button, 
    StyledProductDetail 
} from '../styles/componensts'
import { Seo } from './seo'


const productDetail = ({ unit_amount: price, id, product: {name, /* image, */ metadata }}) => {
    const formatPrice = priceFormat(price)
    const [size, setSize] = useState(2)
    const [qty, setQty] = useState(1)
    return (
        <StyledProductDetail>
            <Seo title={name} />
            {/* <img title={image} /> */}
            <div>
                <Tag>Popular</Tag>
                <h2>{name}</h2>
                <b>USD{formatPrice}</b>
                {metadata.wear && (
                    <SizeSelect select={size}>
                        <SizeButton onClick={() => setSize(1)}>XS</SizeButton>
                        <SizeButton onClick={() => setSize(2)}>S</SizeButton>
                        <SizeButton onClick={() => setSize(3)}>M</SizeButton>
                        <SizeButton onClick={() => setSize(4)}>L</SizeButton>
                        <SizeButton onClick={() => setSize(5)}>XL</SizeButton>
                    </SizeSelect>
                )}
                <p>Cantidad:</p>

                <QtySelect>
                    <button onClick={() => (qty > 1 ? setQty(qty-1): null)}>-</button>
                    <input type='text' disabled value={qty} />
                    <button onClick={() => setQty(qty + 1)}>+</button>
                </QtySelect>
            </div>
        </StyledProductDetail>
    )
}

export default productDetail
