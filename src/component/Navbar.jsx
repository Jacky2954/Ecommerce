import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./userSesion/Login";
import NuevoUsuario from "./userSesion/NuevoUsuario";
import "./navBar.css";
import logoNow from "./allimg2/logoNow.png";
import {Button} from 'react-bootstrap';


const Navbar = () => {
    const state = useSelector((state)=> state.handleCart)
    
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-black py-3 shadow-sm">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <NavLink className="navbar-brand fw-bold fs-4" to="/">
              <img src={logoNow} className="card-img" alt="Background" height="50px" />
            </NavLink>

            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">

            </li>
            </ul>

            <div className="buttons" id="contenedor"> 
                <Login id="modalButton"/>
                <NuevoUsuario/>
                <NavLink to="/cart" className="btn btn-outline-light ms-2">
                   <i className="fa fa-shopping-cart me-1"></i> Carrito ({state.length})</NavLink>
                <NavLink to="/BarraBuscadora" name="barrabuscadora" className="btn btn-outline-light ms-2">
                    <i class="fa fa-search"></i>
                </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
