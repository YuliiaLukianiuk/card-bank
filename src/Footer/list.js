import React from "react";
import "./footer.css";
function List () {
	return (
			<select className="list-wrap">
				<option value="english">English</option>
				<option value="russian">Russian</option>
				<option selected value="ukrainian">Ukrainian</option>
			</select>
	)
}
export default List;