import React, { useRef } from 'react';
import './BookingForm.css';
import useInput from '../../Hooks/use-input';

const isMobileNumber = (number) => {
	return number.trim().length === 10;
}

const isAadharNumber = (number) => {
	return number.trim().length === 12;
}

const stringIsEmpty = (enteredString) => {
	return enteredString.trim() === "";
}

const isEmail = (enteredEmail) => {
	return enteredEmail.includes('@');
}

const BookingForm = () => {

	const { inputIsValid: nameInputIsValid, setInputIsValid: setNameInputIsValid, inputIsTouched: nameInputIsTouched, setInputIsTouched: setNameInputIsTouched } = useInput();

	const { inputIsValid: emailInputIsValid, setInputIsValid: setEmailInputIsValid, inputIsTouched: emailInputIsTouched, setInputIsTouched: setEmailInputIsTouched } = useInput();

	const { inputIsValid: numberInputIsValid, setInputIsValid: setNumberInputIsValid, inputIsTouched: numberInputIsTouched, setInputIsTouched: setNumberInputIsTouched } = useInput();

	const { inputIsValid: aadharInputIsValid, setInputIsValid: setAadharInputIsValid, inputIsTouched: aadharInputIsTouched, setInputIsTouched: setAadharInputIsTouched } = useInput();

	const { inputIsValid: genderInputIsValid, setInputIsValid: setGenderInputIsValid, inputIsTouched: genderInputIsTouched, setInputIsTouched: setGenderInputIsTouched } = useInput();

	const { inputIsValid: dateInputIsValid, setInputIsValid: setDateInputIsValid, inputIsTouched: dateInputIsTouched, setInputIsTouched: setDateInputIsTouched } = useInput();

	const { inputIsValid: durationInputIsValid, setInputIsValid: setDurationInputIsValid, inputIsTouched: durationInputIsTouched, setInputIsTouched: setDurationInputIsTouched } = useInput();

	const { inputIsValid: roomsInputIsValid, setInputIsValid: setRoomsInputIsValid, inputIsTouched: roomsInputIsTouched, setInputIsTouched: setRoomsInputIsTouched } = useInput();

	const { inputIsValid: roomTypeInputIsValid, setInputIsValid: setRoomTypeInputIsValid, inputIsTouched: roomTypeInputIsTouched, setInputIsTouched: setRoomTypeInputIsTouched } = useInput();

	const nameInputRef = useRef();
	const emailInputRef = useRef();
	const numberInputRef = useRef();
	const aadharInputRef = useRef();
	const genderInputRef = useRef();
	const dateInputRef = useRef();
	const durationInputRef = useRef();
	const roomsInputRef = useRef();
	const roomTypeInputRef = useRef();

	const nameInputBlurCheck = (enteredName) => {
		setNameInputIsTouched(true);
		stringIsEmpty(enteredName) ? setNameInputIsValid(false) : setNameInputIsValid(true);
	}

	const emailInputBlurCheck = (enteredEmail) => {
		setEmailInputIsTouched(true);
		stringIsEmpty(enteredEmail) || !isEmail(enteredEmail) ? setEmailInputIsValid(false) : setEmailInputIsValid(true);
	}

	const numberInputBlurCheck = (enteredNumber) => {
		setNumberInputIsTouched(true);
		isMobileNumber(enteredNumber) ? setNumberInputIsValid(true) : setNumberInputIsValid(false);
	}

	const aadharInputBlurCheck = (enteredAadhar) => {
		setAadharInputIsTouched(true);
		isAadharNumber(enteredAadhar) ? setAadharInputIsValid(true) : setAadharInputIsValid(false);
	}

	const genderInputBlurCheck = (enteredGender) => {
		setGenderInputIsTouched(true);
		stringIsEmpty(enteredGender) ? setGenderInputIsValid(false) : setGenderInputIsValid(true);
	}

	const dateInputBlurCheck = (enteredDate) => {
		setDateInputIsTouched(true);
		stringIsEmpty(enteredDate) ? setDateInputIsValid(false) : setDateInputIsValid(true);
	}

	const durationInputBlurCheck = (enteredDuration) => {
		setDurationInputIsTouched(true);
		stringIsEmpty(enteredDuration) ? setDurationInputIsValid(false) : setDurationInputIsValid(true);
	}

	const roomsInputBlurCheck = (enteredRooms) => {
		setRoomsInputIsTouched(true);
		stringIsEmpty(enteredRooms) ? setRoomsInputIsValid(false) : setRoomsInputIsValid(true);
	}

	const roomTypeInputBlurCheck = (enteredRoomType) => {
		setRoomTypeInputIsTouched(true);
		stringIsEmpty(enteredRoomType) ? setRoomTypeInputIsValid(false) : setRoomTypeInputIsValid(true);
	}

	const formSubmitHandler = (event) => {
		event.preventDefault();

		const guestData = {
			name: nameInputRef.current.value,
			email: emailInputRef.current.value,
			number: numberInputRef.current.value,
			aadhar: aadharInputRef.current.value,
			gender: genderInputRef.current.value,
			date: dateInputRef.current.value,
			duration: durationInputRef.current.value,
			rooms: roomsInputRef.current.value,
			roomType: roomTypeInputRef.current.value
		}

		const formIsValid = nameInputIsValid && emailInputIsValid && numberInputIsValid && aadharInputIsValid && genderInputIsValid && dateInputIsValid && durationInputIsValid && roomsInputIsValid && roomTypeInputIsValid;

		if (formIsValid) {
			alert('Booking Noted');
		} else {
			alert('Please fill the form completely');
		}
	}

	return (
		<div className="booking-form-wrapper">
			<div className="booking-form-container">
				<h1>Booking Form</h1>
				<hr />
				<form onSubmit={formSubmitHandler}>
					<div className="input-wrapper">
						<label htmlFor="name">Name: </label>
						<div className='input-and-error'>
							<input ref={nameInputRef} onClick={(event) => { nameInputBlurCheck(event.target.value) }} onBlur={(event) => { nameInputBlurCheck(event.target.value) }} type="text" name="name" id="name" />
							{!nameInputIsValid && nameInputIsTouched && <p className='error-text'>*Please enter a valid name</p>}
						</div>
					</div>
					<div className="input-wrapper">
						<label htmlFor="email">Email: </label>
						<div className='input-and-error'>
							<input ref={emailInputRef} onBlur={(event) => { emailInputBlurCheck(event.target.value) }} type="email" name="email" id="email" />
							{!emailInputIsValid && emailInputIsTouched && <p className='error-text'>*Please enter a valid email</p>}
						</div>
					</div>
					<div className="input-wrapper">
						<label htmlFor="number">Mobile Number: </label>
						<div className='input-and-error'>
							<input ref={numberInputRef} onBlur={(event) => { numberInputBlurCheck(event.target.value) }} type="number" name="number" id="number" />
							{!numberInputIsValid && numberInputIsTouched && <p className='error-text'>*Please enter a valid number of 10 digits</p>}
						</div>
					</div>
					<div className="input-wrapper">
						<label htmlFor="number">Aadhar Card Number: </label>
						<div className='input-and-error'>
							<input ref={aadharInputRef} onBlur={(event) => { aadharInputBlurCheck(event.target.value) }} type="number" name="number" id="number" />
							{!aadharInputIsValid && aadharInputIsTouched && <p className='error-text'>*Please enter a valid aadhar number of 12 digits</p>}
						</div>
					</div>
					<div className="input-wrapper">
						<label htmlFor="gender">Gender: </label>
						<div className='input-and-error'>
							<input ref={genderInputRef} onBlur={(event) => { genderInputBlurCheck(event.target.value) }} list="genders" name="gender" id="gender" />
							<datalist id="genders">
								<option value="Male" />
								<option value="Female" />
							</datalist>
							{!genderInputIsValid && genderInputIsTouched && <p className='error-text'>*Please select a gender</p>}
						</div>
					</div>
					<div className="input-wrapper">
						<label htmlFor="date">Date of Arrival: </label>
						<div className='input-and-error'>
							<input ref={dateInputRef} onBlur={(event) => { dateInputBlurCheck(event.target.value) }} type="date" name="date" id="date" />
							{!dateInputIsValid && dateInputIsTouched && <p className='error-text'>*Please select your date of arrival</p>}
						</div>
					</div>
					<div className="input-wrapper">
						<label htmlFor="duration">Stay Duration: </label>
						<div className='input-and-error'>
							<input ref={durationInputRef} onBlur={(event) => { durationInputBlurCheck(event.target.value) }} list="durations" name="duration" id="duration" />
							<datalist id="durations">
								<option value="1" />
								<option value="2" />
								<option value="More than 2 days" />
								<option value="Can Vary" />
							</datalist>
							{!durationInputIsValid && durationInputIsTouched && <p className='error-text'>*Please select your stay duration</p>}
						</div>
					</div>
					<div className="input-wrapper">
						<label htmlFor="room">Number of Rooms: </label>
						<div className='input-and-error'>
							<input ref={roomsInputRef} onBlur={(event) => { roomsInputBlurCheck(event.target.value) }} list="rooms" name="room" id="room" />
							<datalist id="rooms">
								<option value="1" />
								<option value="2" />
								<option value="More than 2 rooms" />
							</datalist>
							{!roomsInputIsValid && roomsInputIsTouched && <p className='error-text'>*Please select the number of rooms to be booked</p>}
						</div>
					</div>
					<div className="input-wrapper">
						<label htmlFor="room-type">Room Type: </label>
						<div className='input-and-error'>
							<input ref={roomTypeInputRef} onBlur={(event) => { roomTypeInputBlurCheck(event.target.value) }} list="room-types" name="room-type" id="room-type" />
							<datalist id="room-types">
								<option value="Deluxe Room (Rs. 3500 per night)" />
								<option value="Queen Room (Rs. 5000 per night)" />
								<option value="King Room (Rs. 7500 per night)" />
								<option value="Penthouse Room (Rs. 12500 per night)" />
								<option value="Executive Suite (Rs. 15000 per night)" />
								<option value="Presidential Suite (Rs. 25000 per night)" />
							</datalist>
							{!roomTypeInputIsValid && roomTypeInputIsTouched && <p className='error-text'>*Please select a room type</p>}
						</div>
					</div>
					<div className="booking-form-actions">
						<button className='submit-btn'>Submit</button>
					</div>
				</form>
			</div >
		</div >
	)
}

export default BookingForm