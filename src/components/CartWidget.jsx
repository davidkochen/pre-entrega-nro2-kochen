import carrito from "./img/cart-fill.svg"

const CartWidget = () => {
    return(
        <button type="button" className="btn btn-light p-3 position-relative ">
            <img src={carrito} alt={"carrito"} width={24}/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
            </button>
    )
}

export default CartWidget;