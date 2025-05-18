import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Contacto } from "../components/Contacto.jsx";
export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="text-center mt-5">
			<h1>Lista de Conctactos</h1>
		<Contacto/>
		</div>
	);
}; 