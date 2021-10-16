import React from "react";

import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";

// const defaultTodos = [
// 	{ text: "Cortar cebolla", completed: true },
// 	{ text: "Tomar curso de Reactjs", completed: false },
// 	{ text: "Estudiar Probabilidad y Estadistica", completed: false },
// ];

function App() {
	return (
		<TodoProvider>
			<AppUI />
		</TodoProvider>
	);
}

export default App;
