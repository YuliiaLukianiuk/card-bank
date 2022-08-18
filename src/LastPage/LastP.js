import React from "react";
import payment from "../assets/payment_received.jpg"
import "./LastP.css"
function PageThanks (){
	return(
		<div className={"thanks"}>
			<h1 className={"thnk-text"}>Pay was send</h1>
			<h2 className={"thnk-text"}>Thank you for pay!</h2>
			<div className="wrap-img">
				<img className={"payment-foto"} src={payment} alt={"payment"}/>
			</div>
		</div>
	)
}
export default PageThanks;