import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";

const Navbar = () => {
	return (
		<div className="navbar">
			<span className="logo"> KwangApp</span>
			<div className="user">
				<img src="https://images.pexels.com/photos/3978390/pexels-photo-3978390.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
				<span>John</span>
				<button onClick={() => signOut(auth)}>Logout</button>
			</div>
		</div>
	);
};

export default Navbar;
