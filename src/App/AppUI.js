import React, { useContext } from "react";

import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { Header } from "../components/Header";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { Modal } from "../components/Modal";
import { TodoForm } from "../components/TodoForm";
import { useTasks } from "../TodoContext/useTasks";

function AppUI({ setToken }) {
	const { openModal, setOpenModal, userName } = useContext(TodoContext);

	const {
		searchedTasks,
		addTask,
		loading,
		searchValue,
		setSearchValue,
		completeTask,
		deleteTask,
		totalTasks,
		completedTasks,
	} = useTasks();
	return (
		<React.Fragment>
			<Header userName={userName} setToken={setToken} />
			<TodoCounter totalTasks={totalTasks} completedTasks={completedTasks} />
			<TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

			<TodoList>
				{/* {error && <p> Hubo un error! </p>} */}
				{loading && <p> Cargando... </p>}
				{!loading && !searchedTasks.length && <p>Crea tu primer TODO!</p>}

				{searchedTasks.map((task) => (
					<TodoItem
						key={task.title}
						text={task.title}
						completed={task.completed}
						onComplete={() => completeTask(task.id)}
						onDelete={() => deleteTask(task.id)}
					/>
				))}
			</TodoList>

			{openModal && (
				<Modal>
					<TodoForm addTask={addTask} />
				</Modal>
			)}
			<CreateTodoButton setOpenModal={setOpenModal} />
		</React.Fragment>
	);
}

export { AppUI };
