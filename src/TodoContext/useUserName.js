import { useState } from "react";

function useUserName() {
	function getUserName() {
		return sessionStorage.getItem("USER_NAME");
	}

	const [userName, setUserName] = useState(getUserName() || undefined);

	function saveUserName(name) {
		sessionStorage.setItem("USER_NAME", name);
		setUserName(name);
	}

	return {
		setUserName: saveUserName,
		userName,
	};
}

export { useUserName };
