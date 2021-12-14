import React from 'react';
import '@styles/Body.scss';
import { SliderMobile } from '@components/SliderMobile';
import { Description } from '../components/Description';
import { SliderDesktop } from '../components/SliderDesktop';

const Body = () => {
    return (
        <div className='Body'>
            <div className='Body__carousel--mobile'>
                <SliderMobile />
            </div>
            <div className='Body__carousel--desktop'>
                <SliderDesktop />
            </div>
            <div className='Body__description'>
                <Description />
            </div>
        </div>
    )
}

export { Body }
