import React from 'react';
import '../css/CartWidget.css';

function CartWidget(props) {
    return (
        <div className='nav-cart'>
            <img  className='cart-img'src= {require ("../imgs/shop-cart.png")} alt="Shopping Cart" />
            <span className='badge badge-warning' id='lblCartCount'> 0 {props.cantidad_cart} </span>
        </div>
    )
}

export default CartWidget;