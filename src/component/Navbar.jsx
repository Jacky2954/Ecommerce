import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./userSesion/Login";
import {FormControl, Button, InputGroup} from 'react-bootstrap';
import NuevoUsuario from "./userSesion/NuevoUsuario";
import "./navBar.css";
import logoNow from "./allimg2/logoNow.png";
import { Label } from "reactstrap";

const Navbar = () => {
    const state = useSelector((state)=> state.handleCart)
    
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-black py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            <img src={logoNow} className="card-img" alt="Background" height="50px" />
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <InputGroup class="form-control mr-sm-2">
                    <FormControl
                      aria-label="Example text with button addon"
                      aria-describedby="basic-addon1"
                    />
                      <Button variant="btn btn-outline-light ms-2" id="button-addon1">
                      <i class="fa fa-search" aria-hidden="true"></i>
                    </Button>
                  </InputGroup>
                </li>
              </ul>
            <div className="buttons" id="contenedor"> 
                <Login id="modalButton"/>
                <NuevoUsuario/>
                <NavLink to="/cart" className="btn btn-outline-light ms-2">
                   <i className="fa fa-shopping-cart me-1"></i> Carrito ({state.length})</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
