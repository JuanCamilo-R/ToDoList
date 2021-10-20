import React, { useContext } from "react";
import "../styles/TodoCounter.css";

import { TodoContext } from "../TodoContext";

function TodoCounter({ totalTasks, completedTasks }) {
	return (
		<React.Fragment>
			<h1 className="counter__title">To do list</h1>
			<h2 className="counter__todos">
				Has completado {completedTasks} de {totalTasks} TODOs
			</h2>
		</React.Fragment>
	);
}

export { TodoCounter };
