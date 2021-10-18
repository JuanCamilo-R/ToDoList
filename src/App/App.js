import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AppUI } from "./AppUI";
import { FormInitTemplate } from "../components/FormInitTemplate";
import { TodoProvider } from "../TodoContext";

// const defaultTodos = [
// 	{ text: "Cortar cebolla", completed: true },
// 	{ text: "Tomar curso de Reactjs", completed: false },
// 	{ text: "Estudiar Probabilidad y Estadistica", completed: false },
// ];

function App() {
	return (
		<Router>
			<TodoProvider>
				<Switch>
					<Route exact path="/">
						<AppUI />
					</Route>
					<Route exact path="/login">
						<FormInitTemplate
							mainTitle={"Bienvenida/o a TodoList"}
							submitText={"Iniciar sesión"}
							spanInfo={"¿No tienes cuenta?"}
							spanLinkInfo={"Regístrate!"}
							spanLink={"/signup"}
							errorMessage={"Datos incorrectos"}
						/>
					</Route>
					<Route exact path="/signup">
						<FormInitTemplate
							mainTitle={"Regístrate en TodoList"}
							spanInfo={"¿Ya tienes cuenta?"}
							spanLinkInfo={"Inicia sesión!"}
							spanLink={"/login"}
							submitText={"Crear cuenta"}
							errorMessage={
								"Hubo un error al crear tu cuenta, inténtalo otra vez"
							}
						/>
					</Route>
				</Switch>
			</TodoProvider>
		</Router>
	);
}

export default App;
