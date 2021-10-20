import { useState, useEffect } from "react";

function useTasks() {
	const [tasks, setTasks] = useState([]);
	const [searchValue, setSearchValue] = useState("");
	const [loading, setLoading] = useState(true);
	const completedTasks = tasks.filter((task) => !!task.completed).length;
	const totalTasks = tasks.length;
	// console.log(completedTasks, totalTasks);
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

	const getTask = (id) => {
		return tasks.find((task) => task.id == id);
	};

	const addTask = (info) => {
		setLoading(true);
		axios
			.post("http://localhost:8000/api/v1/tasks/", info)
			.then((res) => {
				axios
					.post("http://localhost:8000/api/v1/auth/tasks", {
						user_id: getToken().user_id,
					})
					.then(({ data }) => {
						setTasks(data);
						setLoading(false);
					})
					.catch((e) => {});
			})
			.catch((e) => {});
	};

	const completeTask = (taskId) => {
		axios
			.put(`http://localhost:8000/api/v1/tasks/${taskId}`, {
				completed: !getTask(taskId).completed,
			})
			.then((res) => {
				axios
					.post("http://localhost:8000/api/v1/auth/tasks", {
						user_id: getToken().user_id,
					})
					.then(({ data }) => {
						setTasks(data);
						setLoading(false);
					})
					.catch((e) => {});
			})
			.catch((e) => {});
	};

	const deleteTask = (taskId) => {
		axios
			.delete(`http://localhost:8000/api/v1/tasks/${taskId}`)
			.then((res) => {
				axios
					.post("http://localhost:8000/api/v1/auth/tasks", {
						user_id: getToken().user_id,
					})
					.then(({ data }) => {
						setTasks(data);
						setLoading(false);
					})
					.catch((e) => {});
			})
			.catch((e) => {});
	};

	useEffect(() => {
		const axios = require("axios");

		axios
			.post("http://localhost:8000/api/v1/auth/tasks", {
				user_id: getToken().user_id,
			})
			.then((res) => {
				console.log(res);
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
