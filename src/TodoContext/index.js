import React, { useState } from "react";

const TodoContext = React.createContext();

function TodoProvider(props) {
	const API_TOKEN = process.env.REACT_APP_API_KEY;

	const axios = require("axios");
	const [openModal, setOpenModal] = useState(false);

	const createUser = ({ name, password }) => {
		return axios.post(
			"http://localhost:8000/api/v1/users/",
			{
				name,
				password,
			},
			{ headers: { API_TOKEN: API_TOKEN } }
		);
	};

	const logInUser = ({ name, password }) => {
		return axios.post(
			"http://localhost:8000/api/v1/auth",
			{ name, password },
			{ headers: { API_TOKEN: API_TOKEN } }
		);
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
