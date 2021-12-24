import React from 'react'
import './../style/footer.scss'
export const Footer = () => {
    return (
        <div className='mainFooter'>
            <div className='left'>
                <div className='title'>LAMA.</div>
                <p className='description'>Shiro swam for three hours. Then he arrived at an island.
                     He walked onto the beach, shook the water off, 
                    and walked toward town. Mr Nakamura followed him.
                     Shiro walked to a house. A dog was waiting in front of the house.</p>
                <div className='socialDiv'>
                    <div color='blue' className='fb'><i class="fab fa-facebook-square"></i></div>
                    <div className='insta'><i class="fab fa-instagram-square"></i></div>
                    <div className='tweet'><i class="fab fa-twitter"></i></div>
                    <div className='pinterest'><i class="fab fa-pinterest-square"></i></div>
                </div>
            </div>
            <div className='center'>
                <div className='centerTitle'>Useful Links</div>
                <ul>
                    <li>Home</li>
                    <li>Man Fashion</li>
                    <li>Accessories</li>
                    <li>Order Tracking</li>
                    <li>Wishlist</li>
                    <li>Cart</li>
                    <li>Woman Fashion</li>
                    <li>My Account</li>
                    <li>Skirts</li>
                    <li>Terms</li>
                </ul>
            </div>
            <div className='right'>
                <div className='contactTitle'>Contact</div>
                <div className='rightDetails'>
                <div className='adress'><i class="fas fa-map-marker-alt"></i> 622 Dixie Path, South Tobinchester 98336</div>
                <div className='phone'><i class="fas fa-phone-alt"></i> +1 234 56 78</div>
                <div className='contact'><i class="far fa-envelope"></i> contact@lama.dev</div>
                <div className='creditCard'><i class="fab fa-cc-mastercard"></i><i class="fab fa-cc-paypal"></i></div>
                </div>
            </div>
        </div>
    )
}
