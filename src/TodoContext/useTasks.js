import { useState, useEffect } from "react";

function useTasks() {
	const [tasks, setTasks] = useState([]);
	const [searchValue, setSearchValue] = useState("");
	const [loading, setLoading] = useState(true);
	const completedTasks = tasks.filter((task) => !!task.completed).length;
	const totalTasks = tasks.length;
	const axios = require("axios");

	let searchedTasks = [];

	if (searchValue.length === 0) {
		searchedTasks = tasks;
	} else {
		searchedTasks = tasks.filter((task) => {
			const taskTitle = task.title.toLowerCase();
			const searchTitle = searchValue.toLowerCase();

			return taskTitle.includes(searchTitle);
		});
	}

	const getToken = () => {
		const tokenString = sessionStorage.getItem("USER_TOKEN");
		return JSON.parse(tokenString);
	};

	const addTask = async (info) => {
		const newTasks = [...tasks];

		newTasks.push(info);
		setTasks(newTasks);
		await axios.post("http://localhost:8000/api/v1/tasks/", info);
		axios
			.post("http://localhost:8000/api/v1/auth/tasks", {
				user_id: getToken().user_id,
			})
			.then(({ data }) => {
				setTasks(data);
			});
	};

	const completeTask = (taskId) => {
		const taskIndex = tasks.findIndex((task) => task.id === taskId);
		const updatedTasks = [...tasks];

		updatedTasks[taskIndex].completed = !updatedTasks[taskIndex].completed;
		setTasks(updatedTasks);
		console.log(updatedTasks);
		axios
			.put(`http://localhost:8000/api/v1/tasks/${taskId}`, {
				completed: updatedTasks[taskIndex].completed,
			})
			.then((e) => {
				console.log(updatedTasks[taskIndex].completed);
			});
	};

	const deleteTask = (taskId) => {
		const taskIndex = tasks.findIndex((task) => task.id === taskId);
		const updatedTasks = [...tasks];
		updatedTasks.splice(taskIndex, 1);
		setTasks(updatedTasks);

		axios.delete(`http://localhost:8000/api/v1/tasks/${taskId}`);
	};

	useEffect(() => {
		const axios = require("axios");
		setLoading(true);
		axios
			.post("http://localhost:8000/api/v1/auth/tasks", {
				user_id: getToken().user_id,
			})
			.then((res) => {
				setTasks(res.data);
				setLoading(false);
			})
			.catch((e) => {});
	}, []);

	return {
		tasks,
		setTasks,
		totalTasks,
		completedTasks,
		addTask,
		searchedTasks,
		loading,
		searchValue,
		setSearchValue,
		completeTask,
		deleteTask,
	};
}

export { useTasks };
