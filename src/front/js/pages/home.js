import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Form from "../component/form";
import { Navigate } from "react-router-dom";
import { Private } from "../component/private";
export const Home = () => {
	const { store, actions } = useContext(Context);

	console.log('se cargo home')

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!!</h1>
			{ store.auth ? <Navigate to='/demo' />:<Form />}

			<Private />
			
			
					
		</div>
	);
};
