import React from 'react';
import iconCart from '@icons/icon-cart.svg';
import '@styles/AddToCart.scss';
import { AppContext } from '../context/AppContext';

const AddToCart = () => {

    const {quantity, addQuantity, removeQuantity, addItemToCart} = React.useContext(AppContext);

    return (
        <div className='AddToCart'>
            <div className='AddToCart__count'>
				<p className='decrement' onClick={() => removeQuantity()}>-</p>
				<p>{quantity}</p>
				<p className='increment' onClick={() => addQuantity()}>+</p>
			</div>
            <div className='AddToCart__btn'>
               <button className='btn__ca' type='button' onClick={()=>addItemToCart()}> <span><img src={iconCart} alt="cart" /></span> Add to cart</button>
            </div>
        </div>
    )
}

export { AddToCart }
