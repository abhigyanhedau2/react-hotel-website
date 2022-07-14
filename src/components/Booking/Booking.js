import React from 'react';
import './Booking.css';
import roomTypeArr from '../../utility/booking-room-type';
import LeftBookingCardItem from './LeftBookingCardItem';
import RightBookingCardItem from './RightBookingCardItem';

const Booking = () => {

  const bookingCardList = roomTypeArr.map(item => {
    if (item.imgPosition === 'left')
      return <LeftBookingCardItem type={item.type} desc={item.desc} imgurl={item.imgurl} amenities={item.amenities} rating={item.rating} price={item.price} />

    else
      return <RightBookingCardItem type={item.type} desc={item.desc} imgurl={item.imgurl} amenities={item.amenities} rating={item.rating} price={item.price} />
  })

  // roomTypeArr.forEach(item => console.log(item));

  return (
    <div className='booking-wrapper'>
      {bookingCardList}
    </div>
  )
}

export default Booking