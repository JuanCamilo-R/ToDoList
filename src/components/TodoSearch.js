import React from "react";

import "../styles/TodoSearch.css";
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
