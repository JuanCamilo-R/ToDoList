import React from "react";
import { useUserName } from "../TodoContext/useUserName";
import "../styles/Header.css";

function Header({ setToken }) {
	const { userName, setUserName } = useUserName();

	return (
		<header className="header">
			<div className="header__menu">
				<div className="header__menu--profile">
					<span></span>
					<p>{userName}</p>
				</div>
				<ul>
					<li
						onClick={() => {
							setToken(undefined);
							setUserName(undefined);
							sessionStorage.clear();
						}}
					>
						Cerrar sesión
					</li>
				</ul>
			</div>
		</header>
	);
}

export { Header };
