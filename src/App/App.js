// import "./App.css";
import React, { useState } from "react";

import { AppUI } from "./AppUI";
const defaultTodos = [
	{ text: "Cortar cebolla", completed: true },
	{ text: "Tomar curso de Reactjs", completed: false },
	{ text: "Estudiar Probabilidad y Estadistica", completed: false },
];

function App() {
	const [todos, setTodos] = useState(defaultTodos);
	const [searchValue, setSearchValue] = useState("");

	const completedTodos = todos.filter((todo) => !!todo.completed).length;
	const totalTodos = todos.length;

	let searchedTodos = [];

	if (searchValue.length === 0) {
		searchedTodos = todos;
	} else {
		searchedTodos = todos.filter((todo) => {
			const todoText = todo.text.toLowerCase();
			const searchText = searchValue.toLowerCase();

			return todoText.includes(searchText);
		});
	}

	const completeTodo = (text) => {
		const todoIndex = todos.findIndex((todo) => todo.text === text);

		const newTodos = [...todos];
		newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
		setTodos(newTodos);
	};

	const deleteTodo = (text) => {
		const todoIndex = todos.findIndex((todo) => todo.text === text);
		const newTodos = [...todos];
		newTodos.splice(todoIndex, 1);
		setTodos(newTodos);
	};

	return (
		<AppUI
			totalTodos={totalTodos}
			completedTodos={completedTodos}
			searchedTodos={searchedTodos}
			searchValue={searchValue}
			setSearchValue={setSearchValue}
			completeTodo={completeTodo}
			deleteTodo={deleteTodo}
		/>
	);
}

export default App;
