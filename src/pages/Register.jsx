import React, { useState } from "react";
import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase/firebase.jsx";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
	const [error, setError] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const displayName = e.target[0].value;
		const email = e.target[1].value;
		const password = e.target[2].value;
		const file = e.target[3].files[0];

		console.log(displayName, email, password, file);
		try {
			const res = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);

			const storageRef = ref(storage, displayName);

			const uploadTask = uploadBytesResumable(storageRef, file);

			uploadTask.on(
				(err) => {
					setError(true);
				},
				() => {
					getDownloadURL(uploadTask.snapshot.ref).then(
						async (downloadURL) => {
							await updateProfile(res.user, {
								displayName,
								photoURL: downloadURL,
							});
							await setDoc(doc(db, "users", res.user.uid), {
								uid: res.user.uid,
								displayName,
								email,
								photoURL: downloadURL,
							});

							await setDoc(doc(db, "userChats", res.user.uid), {});
							navigate("/");

						}
					);
				}
			);
		} catch (err) {
			setError(true);
		}
	};

	return (
		<div className="formContainer">
			<div className="formWrapper">
				<span className="logo">KwangChat</span>
				<span className="title">Register</span>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						name=""
						placeholder="dispaly name"
					/>
					<input type="email" name="" id="" placeholder="email" />
					<input
						type="password"
						name=""
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
					{error && <span>Something went wrong</span>}
				</form>
				<p>Do you have an account? <Link to="/login"> Login </Link></p>
			</div>
		</div>
	);
};

export default Register;
