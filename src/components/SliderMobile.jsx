import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "@styles/Slider.scss";
import img1 from '@images/image-product-1.jpg';
import img2 from '@images/image-product-2.jpg';
import img3 from '@images/image-product-3.jpg';

const SliderMobile = () => {
    // renderThumbs: (children) => React.ReactChild[1];
    
    return (
        <div className='Slider'>
            <Carousel infiniteLoop={false}
                autoPlay 
                width={420} 
                showStatus={false} 
                showIndicators={false}
                showThumbs={false}
                onClickThumb={() => console.log('prueba')}
                >
                <div> 
                    <img src={img1} alt="" />
                </div>
                <div>
                    <img src={img2} alt="" />
                </div>
                <div>
                    <img src={img3} alt="" />
                </div>
            </Carousel>
        </div>
    )
}

export { SliderMobile }
