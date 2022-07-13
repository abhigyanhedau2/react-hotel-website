import React from 'react';
import Card from '../UI/Card/Card';
import './CardItem.css';
import './LeftImageCardItem.css';

const LeftImageCardItem = (props) => {
    return (
        <Card className="card-wrapper left-image-card">
            <div className="card-image-wrapper">
                <img src={props.imgurl} alt="" />
            </div>
            <div className="card-details-wrapper">
                <h1>{props.heading}</h1>
                <hr />
                <p>{props.desc}</p>
                {props.link}
            </div>
        </Card>
    )
}

export default LeftImageCardItem