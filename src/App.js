// import "./App.css";
import React from "react";

import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";

const todos = [
	{ text: "Cortar cebolla", completed: false },
	{ text: "Tomar curso de Reactjs", completed: false },
	{ text: "Estudiar Probabilidad y Estadistica", completed: false },
];

function App() {
	return (
		<React.Fragment>
			<TodoCounter />
			<TodoSearch />
			<TodoList>
				{todos.map((todo) => (
					<TodoItem key={todo.text} text={todo.text} />
				))}
			</TodoList>
			<CreateTodoButton />
		</React.Fragment>
	);
}

export default App;
