import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "@styles/Slider.scss";
import img1 from '@images/image-product-1.jpg';
import img2 from '@images/image-product-2.jpg';
import img3 from '@images/image-product-3.jpg';
import img4 from '@images/image-product-4.jpg';

const SliderMobile = () => {
    
    return (
        <div className='Slider'>
            <Carousel infiniteLoop={true}
                autoPlay 
                width={420} 
                showStatus={false} 
                showIndicators={false}
                showThumbs={false}
                onClickThumb={() => console.log('prueba')}
                >
                <div> 
                    <img src={img1} alt="product-1" />
                </div>
                <div>
                    <img src={img2} alt="product-2" />
                </div>
                <div>
                    <img src={img3} alt="product-3" />
                </div>
                <div>
                    <img src={img4} alt="product-4" />
                </div>
            </Carousel>
        </div>
    )
}

export { SliderMobile }
