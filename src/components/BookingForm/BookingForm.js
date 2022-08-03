import React, { useRef } from 'react';
import './BookingForm.css';

const BookingForm = () => {

	const nameInputRef = useRef();
	const emailInputRef = useRef();
	const numberInputRef = useRef();
	const genderInputRef = useRef();
	const dateInputRef = useRef();
	const durationInputRef = useRef();
	const roomsInputRef = useRef();
	const roomTypeInputRef = useRef();

	const formSubmitHandler = (event) => {
		event.preventDefault();

		console.log("Name: ", nameInputRef.current.value);
		console.log("Email: ", emailInputRef.current.value);
		console.log("Number: ", numberInputRef.current.value);
		console.log("Gender: ", genderInputRef.current.value);
		console.log("Date: ", dateInputRef.current.value);
		console.log("Duration: ", durationInputRef.current.value);
		console.log("Rooms: ", roomsInputRef.current.value);
		console.log("Room Type: ", roomTypeInputRef.current.value);
	}

	return (
		<div className="booking-form-wrapper">
			<div className="booking-form-container">
				<h1>Booking Form</h1>
				<hr />
				<form onSubmit={formSubmitHandler}>
					<div className="input-wrapper">
						<label htmlFor="name">Name: </label>
						<input ref={nameInputRef} type="text" name="name" id="name" />
					</div>
					<div className="input-wrapper">
						<label htmlFor="email">Email: </label>
						<input ref={emailInputRef} type="email" name="email" id="email" />
					</div>
					<div className="input-wrapper">
						<label htmlFor="number">Mobile Number: </label>
						<input ref={numberInputRef} type="number" name="number" id="number" />
					</div>
					<div className="input-wrapper width-200">
						<label htmlFor="number">Gender: </label>
						<input ref={genderInputRef} type="radio" name="gender" id="male-radio" />
						<label htmlFor="male-radio">Male</label>
						<input ref={genderInputRef} type="radio" name="gender" id="female-radio" />
						<label htmlFor="female-radio">Female</label>
					</div>
					<div className="input-wrapper width-300">
						<label htmlFor="date">Date of Arrival: </label>
						<input ref={dateInputRef} type="date" name="date" id="date" />
					</div>
					<div className="input-wrapper width-300">
						<label htmlFor="duration">Stay Duration: </label>
						<input ref={durationInputRef} list="durations" name="duration" id="duration" />
						<datalist id="durations">
							<option value="1" />
							<option value="2" />
							<option value="More than 2 days" />
							<option value="Can Vary" />
						</datalist>
					</div>
					<div className="input-wrapper width-300">
						<label htmlFor="room">Number of Rooms: </label>
						<input ref={roomsInputRef} list="rooms" name="room" id="room" />
						<datalist id="rooms">
							<option value="1" />
							<option value="2" />
							<option value="More than 2 rooms" />
						</datalist>
					</div>
					<div className="input-wrapper width-300">
						<label htmlFor="room-type">Room Type: </label>
						<input ref={roomTypeInputRef} list="room-types" name="room-type" id="room-type" />
						<datalist id="room-types">
							<option value="Deluxe Room" />
							<option value="Queen Room" />
							<option value="King Room" />
							<option value="Penthouse Room" />
							<option value="Executive Suite" />
							<option value="Presidential Suite" />
						</datalist>
					</div>
					<div className="booking-form-actions">
						<button className='submit-btn'>Submit</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default BookingForm