import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Login = () => {
	const { store, actions } = useContext(Context);

	// 1. create two useStates, one for email and one for password

	// 3. create a function called handleClick that will include 
	// the fetch with options that includes the email and password
	// in the body to be sent to the server as a POST 

	// 2. make the <input> controlled inputs 
	// also, make the button execute the handleClick function
	
	return (
		<div className="text-center mt-5">
			<h1>Login</h1>
			<div>
				<input type="text" placeholder="email"/>
			</div>
			<div>
				<input type="text" placeholder="password"/>
			</div>
			<div>
				<button>Login</button>
			</div>
		</div>
	);
};
