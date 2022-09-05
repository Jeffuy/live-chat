import React from "react";

const Login = () => {
	return (
		<div className="formContainer">
			<div className="formWrapper">
				<span className="logo">Lama Chat</span>
				<span className="title">Login</span>
				<form action="">
					<input type="email" name="" id="" placeholder="email" />
					<input
						type="password"
						name=""
						id=""
						placeholder="password"
					/>

					<button>Sign ip</button>
				</form>
				<p>Don't you have an account? Register</p>
			</div>
		</div>
	);
};

export default Login;
