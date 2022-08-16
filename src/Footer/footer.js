import React from "react";
import "./footer.css";
import wayForPay from '../assets/wayForPay.png';
import phone from '../assets/MetroUI-Other-Phone-icon.png';
import message from '../assets/messages-icon.png'
import List from "./list";

function Footer() {
	return (
		<div className={"footer"}>
			<div className={"left-side logo"}>
				<img className={"pay"} src={wayForPay} alt="logo"/>
			</div>

			<div className="right-side">
				<div className={"social"}>
					<img className={"phone"} src={phone} alt="phone"/>
					<img className={"message"} src={message} alt="message"/>
				</div>
				<List/>
			</div>
		</div>
	)
}

export default Footer;