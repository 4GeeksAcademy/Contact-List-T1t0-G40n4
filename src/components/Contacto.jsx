export const Contacto = ({name, address, telephone, email, photo , onEdit, onDelete}) => {

    return (
        <div className="card mb-3" style={{width: 540}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={photo} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8 ">
                    <div className="card-body">
                        <h5 className="card-title text-start">{name}</h5>
                        <p className="card-text text-start">{address}</p>
                        <p className="card-text text-start">{telephone}</p>
                        <p className="card-text text start"><small >{email}</small></p>
                        <div>
                               <button className="btn btn-secondary" onClick={()=>onEdit()}> 
                                Edit
                                </button> 
                               <button className="btn btn-danger ms-3" onClick={()=>onDelete()}>
                                 Delete
                                 </button> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}