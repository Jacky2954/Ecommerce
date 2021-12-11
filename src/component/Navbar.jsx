import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./userSesion/Login";
import NuevoUsuario from "./userSesion/NuevoUsuario";

const Navbar = () => {
    const state = useSelector((state)=> state.handleCart)
    
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-black py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            <img src="/allimg/LOGO-NOW.png" className="card-img" alt="Background" height="50px" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
              </li>
            </ul>
            <div className="buttons">
                <Login/>
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
