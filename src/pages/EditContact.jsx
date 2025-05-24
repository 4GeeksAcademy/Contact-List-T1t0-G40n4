import { Formulario } from "../components/Formulario"
import { useParams } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer";

export const EditContact = ()=>{
    const {id} = useParams();
    const {store} = useGlobalReducer();
    const selectContact = store.contactos.find(contact=>String(contact.id)=== String(id));
    
    const editContact = (body) =>{
        fetch(`https://playground.4geeks.com/contact/agendas/Tito/contacts/${id}`, {
            method: 'PUT',
            headers:{'content-type': 'application/json'},
            body:
                JSON.stringify(body)
            
        }

        )
    }
    if (!selectContact){
        return <div>Cargando contacto ...</div>
        
    }
    return(
        <div className="container">
            <h3>Formulario</h3>
            <Formulario 
            title={'Editar contacto'} 
            storeName = {selectContact.name}
            storeAddress = {selectContact.address}
            storePhone = {selectContact.phone}
            storeEmail = {selectContact.email}
            onSubmit ={editContact}/>
        </div>
    )
}