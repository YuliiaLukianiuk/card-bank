import React from "react";
import "./navBar.css";
import visa from '../assets/visa.jpg';
import Means from "../Mean/Means";

function NavBar() {
	return (
		<>
			<div className={"wrapper"}>
				<h5 className={"wrapper-item"}>Назва товару:</h5>
				<p className={"wrapper-item-name"}>Завдання к серіалу: "Why woman kill" (Season 1)</p>
			</div>

			<div className={"wrapper"}>
				<h5 className={"wrapper-item"}>Всього:</h5>
				<p className={"wrapper-item-name price"}>800 UAH</p>
			</div>

			<div className={"wrapper"}>
				<img className='visa' src={visa} alt="foto"/>
				<p className={"wrapper-item-name other"}>Інший спосіб оплати</p>
			</div>
		</>
	)
}

export default NavBar;