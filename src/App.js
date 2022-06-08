import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ShowLoginStatus from "./components/ShowLoginStatus";

function App() {
	const [Token, setToken] = useState("");
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Navbar setToken={setToken} />} />
				<Route path="/loginStatus" element={<ShowLoginStatus Token={Token} />} />
			</Routes>
		</div>
	);
}

export default App;