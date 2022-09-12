import * as React from 'react';


export default function Product({product}) {
    return (
        <div className='mainProduct' style={{backgroundImage:`url(${product.img})`}}>
             <div className='productPodiv'>
              
             <i className="fas fa-shopping-cart"></i>
             <i className="fas fa-search"></i>
             <i className="far fa-heart"></i>
             </div>
        </div>
    )
}
