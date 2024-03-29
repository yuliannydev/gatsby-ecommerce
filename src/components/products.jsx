import React from 'react'
import { Link} from 'gatsby'
import priceFormat from '../utils/priceFormat'
import { StyledProducts } from '../styles/componensts'


const Products = ({ products }) => {
    return (
        <StyledProducts>
            <h2>Products</h2>
            <section>
               {products.map(({node}) => {
                 const unit_amount = priceFormat(node.unit_amount)
                 return (
                   <article key={node.id}>
                     <img 
                     src={node.product.images}
                     alt={node.product.name} />
                     <p>{node.product.name}</p>
                     <small>USD{unit_amount}</small>
                     <Link to= {`/${node.id}`}>
                       Buy now
                       <span> 💵 </span>
                       </Link>
                   </article>
                 )
               }
               )}
            </section>
        </StyledProducts>
    )
}

export default Products
