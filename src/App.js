import React from "react";
import NavBar from "./navBar/navBar";

import './App.css';
import Means from "./Mean/Means";
import Footer from "./Footer/footer";
;

function App() {
	return (
		<div className="app">
			<div className="outside-wrapper">
				<NavBar/>
				<Means/>
				<Footer/>
			</div>

		</div>
	);
}

export default App;
