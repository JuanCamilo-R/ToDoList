import React, { useContext, useState } from "react";

import { TodoContext } from "../TodoContext/index";
import "../styles/FormCreateTodo.css";

function TodoForm({ addTask }) {
	const [newTaskValue, setNewTaskValue] = useState("");
	const { setOpenModal } = useContext(TodoContext);

	const getToken = () => {
		const tokenString = sessionStorage.getItem("USER_TOKEN");
		return JSON.parse(tokenString);
	};

	const onCancel = () => {
		setOpenModal(false);
	};

	const onChange = (e) => {
		setNewTaskValue(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		addTask({
			user_id: getToken().user_id,
			title: newTaskValue,
			completed: false,
		});
		setOpenModal(false);
	};

	return (
		<form onSubmit={onSubmit} className="formContainer">
			<label>Añade una tarea :) </label>
			<textarea
				className="formContainer__text"
				cols="30"
				rows="6"
				placeholder="Ver netflix después de estudiar"
				value={newTaskValue}
				onChange={onChange}
			/>
			<div className="buttonsContainer">
				<button type="submit" className="buttonsContainer__add">
					Añadir
				</button>
				<button
					type="button"
					className="buttonsContainer__cancel"
					onClick={onCancel}
				>
					Cancelar
				</button>
			</div>
		</form>
	);
}

export { TodoForm };
