import React from 'react';
import '@styles/Description.scss';
import { AddToCart } from './AddToCart';

const Description = () => {
    return (
        <div className='Description'>
            <div className='Description__info'>
                <p className='info__company'>SNEAKER COMPANY</p>
                <h1 className='info__title'>Fall Limited Edition Sneakers</h1>
                <p className='info__description'>These low-profile sneakers are your perfect casual wear companion. 
                    Featuring a durable rubber outer sole, they'll withstand everytinh the weather can offer.
                </p>
            </div>
            <div className='Description__costs'>
                <div className='discount--price'>
                    <p className='discount--price-total'>$125.00</p>
                    <p className='discount--price-porcentage'>50%</p>
                </div>
                <div className='base--price'>
                    <p className='base--price-total'>$250.00</p>
                </div>
            </div>
            <AddToCart />
        </div>
    )
}

export { Description }
