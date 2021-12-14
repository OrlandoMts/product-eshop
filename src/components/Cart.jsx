import React from 'react';
import '@styles/Cart.scss';
import deleteItem from '../assets/icons/icon-delete.svg';
import tenis from '../assets/images/image-product-1.jpg';
import { AppContext } from '../context/AppContext';

const Cart = () => {
    let basePrice = 125.00;
    
    const { quantity, resetQuantity, addItem } = React.useContext(AppContext);

    return (
        <div className='Cart'>
            {quantity > 0 && addItem
                ? 
                <div className='Cart__fill'>
                    <div className='Cart__title'>
                        <p>Cart</p>
                    </div>
                    <div className='Cart__fill-item'>
                        <img src={tenis} alt="" className='item--image' />
                        <div>
                           <p>Autum Limited Edition...</p>
                           <p>${basePrice} x {quantity} ${basePrice*quantity}</p> 
                        </div>
                        <img src={deleteItem} alt="" className='icon--delete' onClick={()=>resetQuantity()}/>
                    </div>
                    <div className='AddToCart__btn--checkout'>
                      <button className='btn__ca' type='button' onClick={()=>alert('Compra realizada')}>Checkout</button>
                    </div>
                </div> 
                : 
                <div className='Cart__empty'>
                    <div className='Cart__title'>
                        <p>Cart</p>
                    </div>
                    <p className='tag__empty'>Your cart is empty</p>
                </div> 
            }
            
        </div>
    )
}

export { Cart }
