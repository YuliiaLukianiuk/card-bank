import React from "react";
import NavBar from "./navBar/navBar";

import './App.css';
import Means from "./Mean/Means";
import Footer from "./Footer/footer";
import PagePay from "./FirstPage/FirstP"
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import PageThanks from "./LastPage/LastP";

function App() {
	return (
		<BrowserRouter>
		<div className="app">
			<div className="outside-wrapper pay-page">


				<Routes>
					<Route
						path='/'
						element={<PagePay/>}
					/>

					<Route
						path='/pay'
						element={
								<>
									<NavBar/>
									<Means/>
									<Footer/>
								</>
							}
					/>

					<Route
					path='/thanks'
					element={<PageThanks/>}
					/>
				</Routes>
			</div>

		</div>
		</BrowserRouter>
	);
}

// function App() {
// 	return (
// 		<BrowserRouter>
// 			<div className="app">
// 				<div className="outside-wrapper">
// 					<Routes>
// 						<Route path="/" element={<PagePay />} />
// 							<Route path='/pay' element={
// 								<>
// 									<NavBar />
// 									<Means />
// 									<Footer />
// 								</>
// 							} />
// 					</Routes>
// 				</div>
// 			</div>
// 		</BrowserRouter>
// 	)
// }

export default App;
