import React from 'react';
import Card from '../UI/Card/Card';
import './CardItem.css';
import './RightImageCardItem.css';

const RightImageCardItem = (props) => {
    return (
        <Card className="card-wrapper right-image-card">
            <div className="card-details-wrapper">
                <h1>{props.heading}</h1>
                <hr />
                <p>{props.desc}</p>
                {props.link}
            </div>
            <div className="card-image-wrapper">
                <img src={props.imgurl} alt="" />
            </div>
        </Card>
    )
}

export default RightImageCardItem