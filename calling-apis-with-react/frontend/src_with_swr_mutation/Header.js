import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "./SwrHelper";

export default function Header() {

    const { cart, isLoading } = useCart();

    return (
        <nav className="navbar navbar-expand navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto ms-3 mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink exact to="/" className="navbar-brand"><img src="logo.png" alt="Globoticket logo" /></NavLink>
                    </li>
                </ul>
            </div>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink exact to="/cart" className="nav-link">
                            <span className="bi bi-cart-plus-fill text-white font-xxlarge"></span>
                            <span className="font-upper font-bold text-white ms-4">
                                <span className="font-xxlarge align-middle">{ (!isLoading && cart) ?
                                cart.map(item => item.quantity).reduce((p, n) => p + n, 0) : 0 }</span>
                                <span className="align-middle ms-2">Tickets</span>
                            </span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
  }