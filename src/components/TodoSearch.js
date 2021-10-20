import React, { useContext } from "react";

import "../styles/TodoSearch.css";
import { TodoContext } from "../TodoContext";
function TodoSearch({ searchValue, setSearchValue }) {
	const onSearchValueChange = (event) => {
		setSearchValue(event.target.value);
	};

	return (
		<div className="TodoSearch-container">
			<input
				onChange={onSearchValueChange}
				className="TodoSearch__input"
				value={searchValue}
				placeholder="Tarea"
			/>
			<span className="TodoSearch__icon"></span>
		</div>
	);
}

export { TodoSearch };
