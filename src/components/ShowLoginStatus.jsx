import React from "react";

const ShowLoginStatus = ({ Token }) => {
	return (
		<div>
			Showing Login Status:
			<div>Logged in</div>
			<div>{Token}</div>
		</div>
	);
};

export default ShowLoginStatus;