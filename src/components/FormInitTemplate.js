import React, { useContext, useState } from "react";

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
}) {
	const { createUser, logInUser } = useContext(TodoContext);

	const { setUserName } = useUserName();

	const [userOnForm, setUserOnForm] = useState("");
	const [userPasswordOnForm, setUserPasswordOnForm] = useState("");
	const [errorOnSubmit, setErrorOnSubmit] = useState(false);

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
					setErrorOnSubmit(true);
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
					setErrorOnSubmit(true);
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
				<label htmlFor="">Usuario</label>
				<input
					type="text"
					name="userName"
					onChange={onChangeUserName}
					required
				/>
				<label htmlFor="">Contraseña</label>
				<input
					type="password"
					name="password"
					onChange={onChangeUserPassword}
					required
				/>
				<button type="submit">{submitText}</button>
				{errorOnSubmit && <span>{errorMessage}</span>}
				<span>
					{spanInfo} <Link to={spanLink}>{spanLinkInfo}</Link>
				</span>
			</form>
		</section>
	);
}

export { FormInitTemplate };
