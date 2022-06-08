import axios from "axios";
import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = ({setToken}) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { isAuth, toggleAuth } = useContext(AuthContext);

	const handleLog = () => {};
	const handleSubmit = (e) => {
		e.preventDefault();
		axios({
			url: "https://reqres.in/api/login",
			method: "POST",
			data: {
				email,
				password,
			},
		}).then((res) => {
			alert("Login successful");
            setToken(res.data.token)
			console.log(res.data.token);
			toggleAuth();
		});
	};

	if (isAuth) {
		return <Navigate to="/loginStatus" />;
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Email..."
				/>
				<input
					type="text"
					name="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Password..."
				/>
				<button type="submit" onClick={handleLog}>
					{isAuth ? "Logout" : "Login"}
				</button>
			</form>
		</div>
	);
};

export default Navbar;