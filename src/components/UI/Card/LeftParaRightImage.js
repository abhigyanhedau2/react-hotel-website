import React from 'react';
import './LeftParaRightImage.css';

const LeftParaRightImage = (props) => {
    return (
        <div className='left-para-right-image-wrapper'>
            <div className="lpri-para-wrapper">
                {props.heading ? <h1>{props.heading}</h1> : ''}
                <p>{props.para}</p>
            </div>
            <div className="lpri-image-wrapper">
                <img src={props.imgurl} alt="..." />
            </div>
        </div>
    )
}

export default LeftParaRightImage