import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.jsx";

const Login = () => {
	const [error, setError] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const email = e.target[0].value;
		const password = e.target[1].value;
		console.log(email, password);
		try {
			const res = await signInWithEmailAndPassword(auth, email, password);
			navigate("/");
		} catch (err) {
			setError(true);
		}
	};

	return (
		<div className="formContainer">
			<div className="formWrapper">
				<span className="logo">KwangChat</span>
				<span className="title">Login</span>
				<form onSubmit={handleSubmit}>
					<input type="email" name="" id="" placeholder="email" />
					<input type="password" placeholder="password" />

					<button>Sign in</button>
					{error && <span>Something went wrong</span>}
				</form>
				<p>Don't you have an account?  <Link to="/register">Register</Link></p>
			</div>
		</div>
	);
};

export default Login;
