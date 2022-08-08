import React, { useRef } from 'react';
import Alert from '../UI/Alert/Alert';
import useInput from '../../Hooks/use-input'
import './Login.css';

// const bcrypt = require('bcrypt');

const Login = () => {

	const emailInputRef = useRef();
	const passwordInputRef = useRef();

	const { inputIsValid: emailIsValid, setInputIsValid: setEmailIsValid, inputIsTouched: emailIsTouched, setInputIsTouched: setEmailIsTouched } = useInput();
	const { inputIsValid: passwordIsValid, setInputIsValid: setPasswordIsValid, inputIsTouched: passwordIsTouched, setInputIsTouched: setPasswordIsTouched } = useInput();

	const emailBlurCheck = () => {
		const enteredEmail = emailInputRef.current.value;

		setEmailIsTouched(true);

		if (enteredEmail.trim().length === 0 || !enteredEmail.includes('@'))
			setEmailIsValid(false);

		else
			setEmailIsValid(true);
	}

	const passwordBlurCheck = () => {
		const enteredPassword = passwordInputRef.current.value;

		setPasswordIsTouched(true);

		if (enteredPassword.trim().length === 0)
			setPasswordIsValid(false);

		else
			setPasswordIsValid(true);
	}

	const resetForm = () => {
		emailInputRef.current.value = "";
		passwordInputRef.current.value = "";
	}


	const formSubmitHandler = (event) => {
		event.preventDefault();
		console.log(emailInputRef.current.value, passwordInputRef.current.value);
		resetForm();
	}


	return (
		<div className='login-wrapper'>
			{/* <Alert mode="success" boldMsg="Alert!" message="Alert" /> */}
			<div className="login-container-wrapper">
				<div className="login-container">
					<h1>Login</h1>
					<hr />
					<form onSubmit={formSubmitHandler}>
						<div className="input-wrapper">
							<label htmlFor="email">Email: </label>
							<div className="input-and-error-wrapper">
								<input ref={emailInputRef} onBlur={emailBlurCheck} type="text" name="email" id="email" />
								{!emailIsValid && emailIsTouched && <p>*Enter a valid email</p>}
							</div>
						</div>
						<div className="input-wrapper">
							<label htmlFor="password">Password: </label>
							<div className="input-and-error-wrapper">
								<input ref={passwordInputRef} onBlur={passwordBlurCheck} type="text" name="password" id="password" />
								{!passwordIsValid && passwordIsTouched && <p>*Password cannot be empty</p>}
							</div>
						</div>
						<div className="login-submit-btn">
							<button>Submit</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Login