import React from 'react'
import ProductDetail from '../components/productDetail'

const ProductView = ({ pageContext }) => {
    return (
        <ProductDetail {...pageContext } />
    )
}

export default ProductView
