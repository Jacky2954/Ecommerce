import React, { useState, useEffect} from "react";
import {Modal, Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./loginstyle.css";
import GoogleLogin from 'react-google-login';

class Login extends React.Component {

    state={
        form:{
            username: '',
            contraseña: '',
        }
    }

    handleChange= async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }
    
    async component() {
        const response = async (id) => {
            let res = await fetch(`https://fakestoreapi.com/users/${id}`);
            let data = await res.json();
        }
    }

    constructor(){
        super()
        this.state = {
            showModal: false,
        }
    }

    handleModal(){
        this.setState({showModal: !this.state.showModal})
    }
    render (){

        const respuestaGoogle=(respuesta)=>{
            console.log(respuesta);
            console.log(respuesta.profileObj);
        }

        return (
            <div>
                <Button variant="btn btn-outline-light ms-2" onClick={()=>this.handleModal()}>
                <i className="fa fa-sign-in me-1"></i>Ingresa</Button>

                <Modal id="modalLogin" show={this.state.showModal} onHide={()=>this.handleModal()}>
                    <Modal.Header closeButton>
                    <h4 className="text-center">
                        Iniciar Sesión
                    </h4> 
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>
                                Usuario
                            </Form.Label>
                            <Form.Control type="text" name="username" onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" name="password" onChange={this.handleChange}/>
                        </Form.Group>

                        <br/>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Recordar cuenta" />
                        </Form.Group>

                        <div className="d-grid gap-2">
                            <GoogleLogin
                                id="buttonGoogle"
                                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                                render={renderProps => (
                                  <Button variant="danger" onClick={renderProps.onClick} 
                                  disabled={renderProps.disabled}>
                                    <i className="fa fa-google me-1"></i>
                                     Iniciar con Google</Button>
                                )}
                                buttonText="Login"
                                onSuccess={respuestaGoogle}
                                onFailure={respuestaGoogle}
                                cookiePolicy={'single_host_origin'}
                            />
                        </div>
                        
                        <br/>

                        <div className="d-grid gap-2">
                        <Button variant="primary" type="submit" onClick={()=>this.iniciarSesion()}>
                            Ingresar
                        </Button>
                        </div>
                        </Form>
                    </Modal.Body>     
                </Modal>
            </div>
        )
    }
}

export default Login;
