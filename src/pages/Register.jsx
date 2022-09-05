import React from "react";
import Add from "../img/addAvatar.png";

const Register = () => {
	return (
		<div className="formContainer">
			<div className="formWrapper">
				<span className="logo">Lama Chat</span>
				<span className="title">Register</span>
				<form action="">
					<input
						type="text"
						name=""
						id=""
						placeholder="dispaly name"
					/>
					<input type="email" name="" id="" placeholder="email" />
					<input
						type="password"
						name=""
						id=""
						placeholder="password"
					/>
					<input
						style={{ display: "none" }}
						type="file"
						name=""
						id="file"
					/>
					<label htmlFor="file">
						<img src={Add} alt="add avatar" />{" "}
						<span>Add an avatar</span>
					</label>
					<button>Sign up</button>
				</form>
				<p>Do you have an account? Login</p>
			</div>
		</div>
	);
};

export default Register;
