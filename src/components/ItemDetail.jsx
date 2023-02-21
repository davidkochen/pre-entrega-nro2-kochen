import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    return(
            <div className="container">
                <div className="row">
                    <div className="col-6 d-flex align-items-center justify-content-end">
                        <img src={item.imagen} alt={item.nombre} />
                    </div>
                    <div className="col d-flex align-items-center ">
                        <div>
                            <h1>{item.nombre}</h1>
                            <h4><b>${item.precio}</b></h4>
                            <p>{item.descripcion}</p>
                            <h5><b>{item.categoria}</b></h5>
                            <ItemCount stock={item.stock}/>
                        </div>
                        
                    </div>
                </div>
            </div>
    )
}

export default ItemDetail;