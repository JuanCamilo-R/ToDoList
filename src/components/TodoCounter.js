import React from "react";
import "../styles/TodoCounter.css";

function TodoCounter() {
	return (
		<React.Fragment>
			<h1 className="counter__title">To do list</h1>
			<h2 className="counter__todos">Has completado n de 3 TODOs</h2>
		</React.Fragment>
	);
}

export { TodoCounter };
