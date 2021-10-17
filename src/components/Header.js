import React, { useContext } from "react";

import { TodoContext } from "../TodoContext/index";
import "../styles/Header.css";

function Header() {
	const { userName } = useContext(TodoContext);

	return (
		<header className="header">
			<div className="header__menu">
				<div className="header__menu--profile">
					<span></span>
					<p>{userName}</p>
				</div>
				<ul>
					<li>Cerrar sesión</li>
				</ul>
			</div>
		</header>
	);
}

export { Header };
