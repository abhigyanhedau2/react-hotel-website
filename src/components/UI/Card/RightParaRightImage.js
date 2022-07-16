import React from 'react';
import './RightParaRightImage.css';

const RightParaRightImage = (props) => {
    return (
        <div className='right-para-right-image-wrapper'>
            <div className="rpri-image-wrapper">
                <img src={props.imgurl} alt="..." />
            </div>
            <div className="rpri-para-wrapper">
                {props.heading ? <h1>{props.heading}</h1> : ''}
                <p>{props.para}</p>
            </div>
        </div>
    )
}

export default RightParaRightImage