
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Contacto } from "../components/Contacto.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer();
	const navigate = useNavigate();

	useEffect(() => {
		const loadContacts = async () => {
			const resp = await fetch('https://playground.4geeks.com/contact/agendas/Tito/contacts', {
				method: 'GET',
			})
			const data = await resp.json();
			dispatch({
				type: 'load_contact',
				payload: {
					contactos: data.contacts

				}

			})

		}
		loadContacts();
	}, [])
	console.log(store.contactos)

	const handleDelete = async(id) => {
		console.log(id);
		await fetch (`https://playground.4geeks.com/contact/agendas/Tito/contacts/${id}`,{
			method:'DELETE',
			headers: {
           		'Content-Type': 'application/json'
        	}
		});
		const resp = await fetch('https://playground.4geeks.com/contact/agendas/Tito/contacts', {
			method:'GET',

		});
		const data = await resp.json();
		dispatch({
			type:'load_contact',
			payload:{
				contactos: data.contacts
			}
		})
	}

	return (
		<div className="text-center mt-5">
			<h1>Lista de Conctactos</h1>
			<div className="d-flex flex-column justify-content-center align-items-center">
				{
					store.contactos.map((contactos) => (
						<Contacto 
						key={contactos._id || contactos.email} 
						name={contactos.name} 
						address={contactos.address} 
						phone={contactos.phone} 
						email={contactos.email} 
						photo={''} 
						onEdit={() => navigate(`/edit-contact/${contactos.id}`)} 
						onDelete={() => handleDelete(contactos.id)} />
					))
				}
				
			</div>
		</div>
	);
}; 