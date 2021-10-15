import React from "react";
import "../styles/TodoItem.css";
function TodoItem(props) {
	return (
		<li className="TodoItem">
			<div>
				<button className="TodoItem__checkbox" onClick={props.onComplete}>
					{props.completed && "✔"}
				</button>
				<p
					className={`TodoItem__task ${
						props.completed && "TodoItem__task-completed"
					}`}
				>
					{props.text}
				</p>
			</div>
			<span onClick={props.onDelete}></span>
		</li>
	);
}

export { TodoItem };
