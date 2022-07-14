import React from 'react';
import Card from '../UI/Card/Card';
import './BookingCardItem.css';
import './RightBookingCardItem.css';
import { Link } from 'react-router-dom';

const LeftBookingCardItem = (props) => {

  const ratingArr = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= props.rating)
      ratingArr.push(<i className="fa-solid fa-star"></i>);
    else
      ratingArr.push(<i className="fa-regular fa-star"></i>);
  }

  return (
    <Card className="booking-card-wrapper right-image-booking-card">
      <div className="booking-card-details-wrapper">
        <div className="room-info">
          <h1>{props.type}</h1>
          <hr />
          <p>{props.desc}</p>
        </div>
        <div className="amenities-and-rating">
          <div className="amenities">
            <span>Amenities: {props.amenities.map(item => <i className={item}></i>)} </span>
          </div>
          <div className="rating">
            <span>Rating: {ratingArr.map(item => item)} </span>
          </div>
        </div>
        <div className="actions">
          <span className="room-price"><h1>Rs. {props.price}/-</h1><span>Per Night</span> </span>
          <Link to="/bookingform"><button className='book-btn'>Book Now!</button></Link>
        </div>
      </div>
      <div className="booking-card-image-wrapper">
        <img src={props.imgurl} alt="..." />
      </div>
    </Card>
  )
}

export default LeftBookingCardItem