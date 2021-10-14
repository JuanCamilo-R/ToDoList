import React from "react";

import "../styles/CreateTodoButton.css";

function CreateTodoButton() {
	return (
		<button
			onClick={() => {
				console.log("hubo un clic");
			}}
		>
			+
		</button>
	);
}

export { CreateTodoButton };
