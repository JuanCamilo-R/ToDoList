import React, { useContext, useState } from "react";

import { Link, useHistory } from "react-router-dom";

import { TodoContext } from "../TodoContext/index";
import "../styles/FormLogin.css";

function FormInitTemplate({
	mainTitle,
	submitText,
	spanInfo,
	spanLink,
	spanLinkInfo,
}) {
	const { setUserName } = useContext(TodoContext);

	const [userOnForm, setUserOnForm] = useState("");

	let history = useHistory();

	const onSubmitLogIn = (event) => {
		event.preventDefault();
		setUserName(userOnForm);
		history.push("/");
	};

	const onChange = (event) => {
		setUserOnForm(event.target.value);
	};

	return (
		<section className="formContainerLogin">
			<h2 className="formContainerLogin__main-title">{mainTitle}</h2>
			<form onSubmit={onSubmitLogIn} className="formLogin">
				<label htmlFor="">Usuario</label>
				<input type="text" name="userName" onChange={onChange} required />
				<label htmlFor="">Contraseña</label>
				<input type="password" name="password" required />
				<button type="submit">{submitText}</button>
				<span>
					{spanInfo} <Link to={spanLink}>{spanLinkInfo}</Link>
				</span>
			</form>
		</section>
	);
}

export { FormInitTemplate };
