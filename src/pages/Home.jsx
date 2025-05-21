import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Contacto } from "../components/Contacto.jsx";
import { Formulario } from "../components/Formulario.jsx";
import { useEffect } from "react";
import {useState } from "react";
export const Home = () => {

	const { store, dispatch } = useGlobalReducer();

	useEffect(() =>{
		const loadContacts = async () =>{
			const resp = await fetch ('https://playground.4geeks.com/contact/agendas/Tito/contacts',{
					method: 'GET',
			})
			const data = await resp.json();
			dispatch({
				type:'load_contact',
				payload:{
					contactos:data.contacts
					
				}
				
			})
			
		}
		loadContacts();
	},[])
		console.log(store.contactos)
	return (
		<div className="text-center mt-5">
			<h1>Lista de Conctactos</h1>
			<div className="d-flex flex-column justify-content-center align-items-center">
				{
					store.contactos.map((contactos)=>(
					<Contacto key={contactos._id} name={contactos.name}  address={contactos.address} telephone={contactos.telephone} email={''} photo={''} onEdit={()=>{} } onDelete={()=>{}}/>	
					))
				}
				
			</div>
		</div>
	);
}; 