import React from 'react';
import './Parallax.css';

const Parallax = (props) => {
    return (
        <div className='parallax-wrapper'>
            <div className="parallax-headings">
                <h1>{props.h1}</h1>
            </div>
            <div className="parallax" style={{ backgroundImage: 'url(' + props.imgurl + ')' }}>
                <div className="parallax-content">
                    <p>{props.p1}</p>
                    <p>{props.p2}</p>
                    <p>{props.p3}</p>
                </div>
            </div>
        </div>
    )
}

export default Parallax