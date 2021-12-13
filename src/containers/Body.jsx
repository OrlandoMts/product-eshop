import React from 'react';
import '@styles/Body.scss';
import { SliderMobile } from '@components/SliderMobile';
import { Description } from '../components/Description';

const Body = () => {
    return (
        <div className='Body__carousel'>
            <SliderMobile />
            <Description />
        </div>
    )
}

export { Body }
