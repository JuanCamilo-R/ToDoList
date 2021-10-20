import { useState } from "react";

function useToken(tokenName) {
	const getToken = () => {
		const tokenString = sessionStorage.getItem(tokenName);
		return JSON.parse(tokenString);
	};

	const [token, setToken] = useState(getToken());

	const saveToken = (userToken) => {
		if (userToken === undefined) {
			sessionStorage.clear();
			setToken(null);
		} else {
			sessionStorage.setItem(tokenName, JSON.stringify(userToken));
			setToken(userToken);
		}
	};

	return {
		setToken: saveToken,
		token,
	};
}

export { useToken };
