import React from "react";
import "../styles/TodoItem.css";
function TodoItem(props) {
	const onComplete = () => {
		alert("Ya completaste el todo " + props.text);
	};

	const onDelete = () => {
		alert("Borraste el todo " + props.text);
	};

	return (
		<li className="TodoItem">
			<div>
				<button className="TodoItem__checkbox" onClick={props.onComplete}>
					{props.completed && "✔"}
				</button>
				<p className={`${props.completed && "TodoItem__task-completed"}`}>
					{props.text}
				</p>
			</div>
			<span onClick={onDelete}></span>
		</li>
	);
}

export { TodoItem };
