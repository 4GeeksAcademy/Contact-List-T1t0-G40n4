import { useEffect, useState } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer";
export const Formulario = ({title, storeName, storePhone, storeAddress, storeEmail, onSubmit}) => {

    const {store} = useGlobalReducer();
    console.log(store.contactos);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [photo, setPhoto] = useState('')
    
    useEffect (()=>{
    if(storeName) setName(storeName);
    if(storeAddress) setAddress(storeAddress);
    if(storePhone) setPhone(storePhone);
    if(storeEmail) setEmail(storeEmail);
    
    },[storeName, storeAddress, storeEmail, storePhone])

    return (
        <div className="container">
            <form>
                <fieldset>
                    <legend>{title}</legend>
                    <div className="mb-3">
                        <label htmlFor="PhotoInput" className="form-label">Photo</label>
                      <input value = {photo} type="text" id="PhotoInput" className="form-control" placeholder="" onChange={(e)=> setPhoto(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="NameInput" className="form-label" >Name</label>
                        <input value={name} type="text" id="NameInput" className="form-control" placeholder="" onChange={(e)=> setName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="AddressInput" className="form-label" >Address</label>
                        <input value={address} type="text" id="AddressInput" className="form-control" placeholder="" onChange={(e)=> setAddress(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phoneInput" className="form-label" >phone</label>
                        <input value={phone} type="text" id="phoneInput" className="form-control" placeholder="" onChange={(e)=> setPhone(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="EmailInput" className="form-label">Email</label>
                        <input value={email} type="text" id="EmailInput" className="form-control" placeholder="" onChange={(e)=> setEmail(e.target.value)} />
                    </div>


                    <button  className="btn btn-primary" onClick={(e)=>{
                        e.preventDefault();
                        onSubmit({
                            
                            name,
                            phone,
                            address,
                            email,
                            photo
                        })
                    }}>Guardar</button>
                    <button className="btn btn-secondary mx-3" onClick={()=>{
                        setName('')
                        setPhone('')
                        setAddress('')
                        setEmail('')

                    }}>Cancelar</button>
                </fieldset>
            </form>

        </div>
    )
}