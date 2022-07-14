import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './ImageSlider.css';
import imgsliderimg1 from '../../assets/Home/imgsliderimg1.jpg';
import imgsliderimg2 from '../../assets/Home/imgsliderimg2.jpg';
import imgsliderimg3 from '../../assets/Home/imgsliderimg3.jpg';
import imgsliderimg4 from '../../assets/Home/imgsliderimg4.jpg';
import imgsliderimg5 from '../../assets/Home/imgsliderimg5.jpg';
import imgsliderimg6 from '../../assets/Home/imgsliderimg6.jpg';

const ImageSlider = () => {

    const images = [
        imgsliderimg1,
        imgsliderimg2,
        imgsliderimg3,
        imgsliderimg4,
        imgsliderimg5,
        imgsliderimg6
    ];

    return (
        <div className="slider-wrapper">
            <Slide duration={2000}>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default ImageSlider