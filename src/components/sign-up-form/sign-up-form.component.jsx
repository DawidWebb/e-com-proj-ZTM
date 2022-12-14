import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { DivSignUpContainer } from "./sign-up-form.styles";

const defaultFormFilelds = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFilelds);
	const { displayName, email, password, confirmPassword } = formFields;

	const dispatch = useDispatch();

	const resetFormFields = () => {
		setFormFields(defaultFormFilelds);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (password !== confirmPassword) {
			alert("Password do not match");
			return;
		}
		try {
			dispatch(signUpStart(email, password, displayName));

			resetFormFields();
		} catch (error) {
			if (error.code === "auth/email-already-in-use") {
				alert(`Email: ${email} is already exist in database`);
			} else {
				console.log("user creation error:", error);
			}
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<DivSignUpContainer>
			<h2>Don't have an account?'</h2>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Display Name"
					type="text"
					required
					onChange={handleChange}
					name="displayName"
					value={displayName}
				/>

				<FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />

				<FormInput
					label="Password"
					type="password"
					required
					onChange={handleChange}
					name="password"
					value={password}
				/>

				<FormInput
					label="Confirm Password"
					type="password"
					required
					onChange={handleChange}
					name="confirmPassword"
					value={confirmPassword}
				/>
				<Button type="submit">Sign Up</Button>
			</form>
		</DivSignUpContainer>
	);
};

export default SignUpForm;
