import React from 'react';
import '../css/CartWidget.css';


function CartWidget({cantidad}) {
    return (
        <div className='nav-cart'>
            <img  className='cart-img' src= {require ("../imgs/shop-cart.png")} alt="Shopping Cart" />
            <span className='badge badge-warning' id='lblCartCount'> {cantidad} </span>
        </div>
    )
}

export default CartWidget;   