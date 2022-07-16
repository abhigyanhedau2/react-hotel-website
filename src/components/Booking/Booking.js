import React, { useEffect } from 'react';
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

  // Scroll to the top of the page after component is mounted
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='booking-wrapper'>
      <h1>Booking Section</h1>
      <hr />
      {bookingCardList}
    </div>
  )
}

export default Booking