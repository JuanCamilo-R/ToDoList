import React, { useContext, useState } from "react";

import { TodoContext } from "../TodoContext/index";
import "../styles/FormCreateTodo.css";

function TodoForm() {
	const [newTodoValue, setNewTodoValue] = useState("");
	const { addTodo, setOpenModal } = useContext(TodoContext);

	const onCancel = () => {
		setOpenModal(false);
	};

	const onChange = (e) => {
		setNewTodoValue(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		addTodo(newTodoValue);
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
				value={newTodoValue}
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
