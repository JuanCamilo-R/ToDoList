import React from "react";
import "../styles/TodoItem.css";
function TodoItem(props) {
	return (
		<ul className="TodoItem">
			<p>{props.text}</p>
		</ul>
	);
}

export { TodoItem };
