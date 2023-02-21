import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";
import logo from "./img/logo.png";

const Navbar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to={"/"}><img src = {logo} alt ="PokeShop" width={"108"}/></Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                    <NavLink className="nav-link" activeClassName={"active"} to={"/"}>Productos</NavLink>
                                    </li>
                                    <li className="nav-item">
                                    <NavLink className="nav-link" activeClassName={"active"} to={"/category/Hombres"}>Hombres</NavLink>
                                    </li>
                                    <li className="nav-item">
                                    <NavLink className="nav-link" activeClassName={"active"} to={"/category/Mujeres"}>Mujeres</NavLink>
                                    </li>
                                    <li className="nav-item">
                                 <NavLink className="nav-link" activeClassName={"active"} to={"/category/Unisex"}>Unisex</NavLink>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col d-flex align-items-center justify-content-end" >
                    <CartWidget/>
                </div>
            </div>
        </div>
    );
}

export default Navbar; 