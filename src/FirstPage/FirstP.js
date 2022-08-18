import React from "react";
import {Link} from "react-router-dom";
import  "./FirstP.css"
 function PagePay () {
	return (
		<div className="page-pay">
			<h1>Hello!</h1>
			<h3>If you are interesting this workbook and you want buy her, please click button below</h3>
			<Link to='/pay'>
				<button className="btn-pay">Pay</button>
			</Link>
		</div>
	)
}
export default PagePay;