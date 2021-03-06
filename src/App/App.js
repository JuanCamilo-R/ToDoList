import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AppUI } from "./AppUI";
import { FormInitTemplate } from "../components/FormInitTemplate";
import { TodoProvider } from "../TodoContext";
import { useToken } from "../TodoContext/useToken";

function App() {
	const { token, setToken } = useToken("USER_TOKEN");

	return (
		<Router>
			<TodoProvider>
				<Switch>
					<Route exact path="/">
						{!token ? (
							<FormInitTemplate
								mainTitle={"Bienvenida/o a TodoList"}
								submitText={"Iniciar sesión"}
								spanInfo={"¿No tienes cuenta?"}
								spanLinkInfo={"Regístrate!"}
								spanLink={"/signup"}
								errorMessage={"Datos incorrectos"}
								saveInitToken={setToken}
								htmlFor={"login"}
							/>
						) : (
							<AppUI setToken={setToken} />
						)}
					</Route>
					<Route exact path="/signup">
						<FormInitTemplate
							mainTitle={"Regístrate en TodoList"}
							spanInfo={"¿Ya tienes cuenta?"}
							spanLinkInfo={"Inicia sesión!"}
							spanLink={"/"}
							submitText={"Crear cuenta"}
							errorMessage={
								"Hubo un error al crear tu cuenta, inténtalo otra vez"
							}
							htmlFor={"create"}
						/>
					</Route>
				</Switch>
			</TodoProvider>
		</Router>
	);
}

export default App;
