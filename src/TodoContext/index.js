import React, { useState } from "react";

const TodoContext = React.createContext();

function TodoProvider(props) {
	const axios = require("axios");
	const [openModal, setOpenModal] = useState(false);

	const createUser = ({ name, password }) => {
		return axios.post("http://localhost:8000/api/v1/users/", {
			name,
			password,
		});
	};

	const logInUser = ({ name, password }) => {
		return axios.post("http://localhost:8000/api/v1/auth", { name, password });
	};

	return (
		<TodoContext.Provider
			value={{
				setOpenModal,
				openModal,
				createUser,
				logInUser,
			}}
		>
			{props.children}
		</TodoContext.Provider>
	);
}

export { TodoContext, TodoProvider };
