import * as React from 'react';
import './../style/Products.scss'
import Product from './Product'
import { shoppingProducts } from './../data/data'
function Products() {
    return (
        <div className="mainProducts">

            {shoppingProducts.map(product=>{
                return <Product key={product.id} product={product}/>            

            })}
        </div>
    )
}

export default Products
