import React, { useRef, useState } from 'react';
import useInput from '../../Hooks/use-input';
import './Contact.css';
import Alert from '../UI/Alert/Alert';

const Contact = () => {

	const [showAlert, setShowAlert] = useState(false);

	const nameInputRef = useRef();
	const emailInputRef = useRef();
	const queryInputRef = useRef();

	const { inputIsValid: nameIsValid, setInputIsValid: setNameIsValid, inputIsTouched: nameIsTouched, setInputIsTouched: setNameIsTouched } = useInput();
	const { inputIsValid: emailIsValid, setInputIsValid: setEmailIsValid, inputIsTouched: emailIsTouched, setInputIsTouched: setEmailIsTouched } = useInput();
	const { inputIsValid: queryIsValid, setInputIsValid: setQueryIsValid, inputIsTouched: queryIsTouched, setInputIsTouched: setQueryIsTouched } = useInput();

	const stringIsEmpty = (enteredValue) => {

		if (enteredValue.trim().length === 0)
			return true;

		else
			return false;
	}

	const nameBlurCheck = () => {
		const enteredName = nameInputRef.current.value;

		setNameIsTouched(true);

		if (stringIsEmpty(enteredName))
			setNameIsValid(false);

		else
			setNameIsValid(true);
	}

	const queryBlurCheck = () => {
		const enteredQuery = queryInputRef.current.value;

		setQueryIsTouched(true);

		if (stringIsEmpty(enteredQuery))
			setQueryIsValid(false);

		else
			setQueryIsValid(true);
	}

	const emailBlurCheck = () => {
		const enteredEmail = emailInputRef.current.value;

		setEmailIsTouched(true);

		if (enteredEmail.trim().length === 0 || !enteredEmail.includes('@'))
			setEmailIsValid(false);

		else
			setEmailIsValid(true);
	}

	const resetForm = () => {
		nameInputRef.current.value = "";
		emailInputRef.current.value = "";
		queryInputRef.current.value = "";
	}

	const showAlertHandler = () => {
		setShowAlert(true);

		setTimeout(() => {
			setShowAlert(false);
		}, 2000);
	}

	const formSubmitHandler = (event) => {
		event.preventDefault();

		const contactData = {
			name: nameInputRef.current.value,
			email: emailInputRef.current.value,
			query: queryInputRef.current.value
		}

		const formIsValid = nameIsValid && emailIsValid && queryIsValid;

		if (formIsValid) {
			fetch('https://react-hotel-9e36f-default-rtdb.firebaseio.com/contactdata.json', {
				method: 'POST',
				body: JSON.stringify({ contactData: contactData })
			})

			resetForm();
			showAlertHandler();
		} else {
			alert('Please fill the form completely');
		}
	}

	return (
		<div className='contact-wrapper'>
			{showAlert && <Alert mode="success" boldMsg="Query Noted!" message="We'll get back to you on this." />}
			<div className="contact-container">
				<h1>Contact Us</h1>
				<hr />
				<form className="contact-form-wrapper" onSubmit={formSubmitHandler}>
					<div className="input-wrapper">
						<label htmlFor="name">Name: </label>
						<div className="input-and-error-wrapper">
							<input ref={nameInputRef} onBlur={nameBlurCheck} type="text" name="name" id="name" />
							{!nameIsValid && nameIsTouched && <p>*Enter a valid name</p>}
						</div>
					</div>
					<div className="input-wrapper">
						<label htmlFor="email">Email: </label>
						<div className="input-and-error-wrapper">
							<input ref={emailInputRef} onBlur={emailBlurCheck} type="text" name="email" id="email" />
							{!emailIsValid && emailIsTouched && <p>*Enter a valid email</p>}
						</div>
					</div>
					<div className="input-wrapper">
						<label htmlFor="query">Query: </label>
						<div className="input-and-error-wrapper">
							<textarea ref={queryInputRef} onBlur={queryBlurCheck} name="query" id="query" style={{ resize: 'none' }} />
							{!queryIsValid && queryIsTouched && <p>*Query cannot be empty</p>}
						</div>
					</div>
					<div className="submit-btn-wrapper">
						<button>Submit</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Contact