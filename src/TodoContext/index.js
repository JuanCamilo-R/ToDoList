import React, { useState } from "react";

import { useLocalStorage } from "./useLocalStorage";
import { useTasks } from "./useTasks";

const TodoContext = React.createContext();

function TodoProvider(props) {
	const {
		item: todos,
		saveItem: saveTodos,
		loading,
		error,
	} = useLocalStorage("TODOS_V1", []);

	const axios = require("axios");

	const [searchValue, setSearchValue] = useState("");
	const [openModal, setOpenModal] = useState(false);

	let searchedTasks = [];

	if (searchValue.length === 0) {
		searchedTasks = todos;
	} else {
		searchedTasks = todos.filter((todo) => {
			const taskTitle = todo.title.toLowerCase();
			const searchTitle = searchValue.toLowerCase();

			return taskTitle.includes(searchTitle);
		});
	}

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
				loading,
				error,
				searchValue,
				setSearchValue,
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
