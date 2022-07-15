import React from 'react';
import Card from '../UI/Card/Card';
import './FoodItem.css';

const FoodItem = (props) => {
    return (
        <Card className='food-item-card-wrapper'>
            <div className="food-item-img-wrapper">
                <img src={props.imgurl} alt="" />
            </div>
            <div className="food-item-details-wrapper">
                <h1>{props.name}</h1>
                <p><i>{props.desc}</i></p>
                <div className="price">
                    <span>Price: Rs. {props.price} /-</span>
                </div>
            </div>
        </Card>
    )
}

export default FoodItem