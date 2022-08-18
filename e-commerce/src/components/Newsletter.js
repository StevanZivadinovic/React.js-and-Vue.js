import React from 'react'
import './../style/newsletter.scss'
export const Newsletter = () => {
    return (
        <div className='mainNewsletter'>
            <h3>Newsletter</h3>
            <div className='description'>Get timely updates from your favorite products</div>
            <div className='inputBox'>
                <input type='text' placeholder='Your mail'></input>
                <button onClick={()=>{alert('hello')}}><i className="fas fa-angle-double-right"></i></button>
            </div>
        </div>
    )
}
