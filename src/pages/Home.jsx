import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Contacto } from "../components/Contacto.jsx";
import { Formulario } from "../components/Formulario.jsx";
import { useEffect } from "react";
import {useState } from "react";
export const Home = () => {

	const { store, dispatch } = useGlobalReducer();
	const  [contacto, setContacto]  = useState ([]);

	useEffect(() =>{
		const loadContacts = async () =>{
			await fetch ('https://playground.4geeks.com/contact/agendas/Tito/contacts',{
					method: 'GET',
			})
			const data = await resp.json();
			setContacto(data.contacts)
		}
		loadContacts();
	},[])

	return (
		<div className="text-center mt-5">
			<h1>Lista de Conctactos</h1>
			<div className="d-flex justify-content-center">
				{
					contacto.map(()=>{
					<Contacto key={contacto._id} name={''}  address={''} telephone={''} email={''} photo={''} onEdit={()=>{} } onDelete={()=>{}}/>	
					})
				}
				
			</div>
		</div>
	);
}; 