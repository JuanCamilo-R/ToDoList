import React from "react";

import "../styles/CreateTodoButton.css";

function CreateTodoButton({ setOpenModal }) {
	const onClickButton = () => {
		setOpenModal((prevState) => !prevState);
	};

	return (
		<button className="createTodoButton" onClick={onClickButton}>
			+
		</button>
	);
}

export { CreateTodoButton };
