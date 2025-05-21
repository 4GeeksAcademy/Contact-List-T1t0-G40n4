import {Formulario} from "../components/Formulario"
export const CreateContact = () =>{

    const createContact = (body)=>{
        fetch('https://playground.4geeks.com/contact/agendas/Tito/contacts', {
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(body)
        })

    }
    return(
        <div className="container">
            <h3>Formulario</h3>
            <Formulario title={'Crear contacto'} onSubmit ={createContact}/>
        </div>
    )
}