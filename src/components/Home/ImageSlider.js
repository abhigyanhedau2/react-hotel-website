import React from 'react';
import { Fade } from 'react-slideshow-image';
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
            <Fade duration={3000} arrows={false}>
                <div className="each-slide slide">
                    <div>
                        <img src={images[0]} alt="..." />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={images[1]} alt="..." />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={images[2]} alt="..." />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={images[3]} alt="..." />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={images[4]} alt="..." />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={images[5]} alt="..." />
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default ImageSlider