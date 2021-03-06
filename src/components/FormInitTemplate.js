import React, { useContext, useState } from "react";
import Swal from "sweetalert2";

import { Link, useHistory } from "react-router-dom";

import { TodoContext } from "../TodoContext/index";
import { useUserName } from "../TodoContext/useUserName";
import "../styles/FormLogin.css";

function FormInitTemplate({
	mainTitle,
	submitText,
	spanInfo,
	spanLink,
	spanLinkInfo,
	errorMessage,
	saveInitToken,
	htmlFor,
}) {
	const { createUser, logInUser } = useContext(TodoContext);

	const { setUserName } = useUserName();

	const [userOnForm, setUserOnForm] = useState("");
	const [userPasswordOnForm, setUserPasswordOnForm] = useState("");

	let history = useHistory();

	const onSubmit = (event) => {
		event.preventDefault();
		if (spanLink === "/") {
			const user = {
				name: userOnForm,
				password: userPasswordOnForm,
			};
			createUser(user)
				.then((res) => {
					console.log(res);
					history.push("/");
				})
				.catch((e) => {
					Swal.fire({
						icon: "error",
						title: "Oops...",
						text: "Hubo un error al crear la cuenta, tal vez el nombre de usuario ya está tomado",
						position: "top",
					});
				});
		} else {
			const user = {
				name: userOnForm,
				password: userPasswordOnForm,
			};
			logInUser(user)
				.then((res) => {
					setUserName(user.name);
					saveInitToken(res.data);
				})
				.catch((e) => {
					console.log(e);
					Swal.fire({
						icon: "error",
						title: "Oops...",
						text: "Hubo un error en el login, revisa tus credenciales",
						position: "top",
					});
				});
		}
	};

	const onChangeUserName = (event) => {
		setUserOnForm(event.target.value);
	};

	const onChangeUserPassword = (event) => {
		setUserPasswordOnForm(event.target.value);
	};

	return (
		<section className="formContainerLogin">
			<h2 className="formContainerLogin__main-title">{mainTitle}</h2>
			<form onSubmit={onSubmit} className="formLogin">
				<label htmlFor={htmlFor}>Usuario</label>
				<input
					type="text"
					name="userName"
					onChange={onChangeUserName}
					value={userOnForm}
					required
				/>
				<label htmlFor={htmlFor}>Contraseña</label>
				<input
					type="password"
					name="password"
					onChange={onChangeUserPassword}
					value={userPasswordOnForm}
					required
				/>
				<button type="submit">{submitText}</button>
				<span>
					{spanInfo} <Link to={spanLink}>{spanLinkInfo}</Link>
				</span>
			</form>
		</section>
	);
}

export { FormInitTemplate };
