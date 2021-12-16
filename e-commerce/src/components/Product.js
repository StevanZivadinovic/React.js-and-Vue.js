import React from 'react'

export default function Product({product}) {
    return (
        <div className='mainProduct' style={{backgroundImage:`url(${product.img})`}}>
             <div className='productPodiv'>
              
             <i class="fas fa-shopping-cart"></i>
             <i class="fas fa-search"></i>
             <i class="far fa-heart"></i>
             </div>
        </div>
    )
}
