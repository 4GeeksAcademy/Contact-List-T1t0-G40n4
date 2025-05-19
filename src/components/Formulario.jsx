export const Formulario = ({title}) => {

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
                        <label htmlFor="NameInput" className="form-label">Name</label>
                        <input type="text" id="NameInput" className="form-control" placeholder="" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="AddressInput" className="form-label">Address</label>
                        <input type="text" id="AddressInput" className="form-control" placeholder="" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="TelephoneInput" className="form-label">Telephone</label>
                        <input type="text" id="TelephoneInput" className="form-control" placeholder="" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="EmailInput" className="form-label">Email</label>
                        <input type="text" id="EmailInput" className="form-control" placeholder="" />
                    </div>


                    <button type="submit" className="btn btn-primary">Guardar</button>
                    <button type="submit" className="btn btn-secondary mx-3">Cancelar</button>
                </fieldset>
            </form>

        </div>
    )
}