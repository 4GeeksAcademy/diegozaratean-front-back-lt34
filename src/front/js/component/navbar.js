import React , {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const navigate = useNavigate()

	function handleLogout(){
		actions.logout()
		navigate("/")
	}


	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					{ store.auth ? <button onClick={()=>handleLogout()} className="btn btn-primary">logout</button>:null}
					
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
