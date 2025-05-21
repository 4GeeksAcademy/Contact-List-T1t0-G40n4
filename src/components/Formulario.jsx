import { useState } from "react"
export const Formulario = ({title, onSubmit}) => {

    const [name, setName] = useState('');
    const [telephone, setTelephone] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [photo, setPhoto] = useState('')

    return (
        <div className="container">
            <form>
                <fieldset>
                    <legend>{title}</legend>
                    <div className="mb-3">
                        <label htmlFor="PhotoInput" className="form-label">Photo</label>
                      <input type="text" id="PhotoInput" className="form-control" placeholder="" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="NameInput" className="form-label" >Name</label>
                        <input value={name} type="text" id="NameInput" className="form-control" placeholder="" onChange={(e)=> setName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="AddressInput" className="form-label" >Address</label>
                        <input  type="text" id="AddressInput" className="form-control" placeholder="" onChange={(e)=> setAddress(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="TelephoneInput" className="form-label" >Telephone</label>
                        <input value={telephone} type="text" id="TelephoneInput" className="form-control" placeholder="" onChange={(e)=> setTelephone(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="EmailInput" className="form-label">Email</label>
                        <input type="text" id="EmailInput" className="form-control" placeholder="" onChange={(e)=> setEmail(e.target.value)} />
                    </div>


                    <button  className="btn btn-primary" onClick={(e)=>{
                        e.preventDefault();
                        onSubmit({
                            
                            name,
                            telephone,
                            address,
                            email,
                            photo
                        })
                    }}>Guardar</button>
                    <button className="btn btn-secondary mx-3" onClick={()=>{
                        setName('')
                        setTelephone('')
                        setAddress('')
                        setEmail('')

                    }}>Cancelar</button>
                </fieldset>
            </form>

        </div>
    )
}