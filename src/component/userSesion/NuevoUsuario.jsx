import React from "react";
import {Modal, Button, Form, Label, Input} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./nuevoUsuario.css";
import GoogleLogin from 'react-google-login';

class Register extends React.Component {
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
                <i className="fa fa-user-plus me-1"></i>Regístrate</Button>

                <Modal id="modalRegister" show={this.state.showModal} onHide={()=>this.handleModal()}>
                    <Modal.Header closeButton>
                        <h4 className="text-center">
                        Crear nuevo usuario
                        </h4> 
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                        <Form.Label>
                                Crear usuario
                            </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Crear contraseña</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label for="exampleDate">
                                Fecha de nacimiento
                            </Form.Label>
                                <Form.Control
                                id="exampleDate"
                                name="date"
                                placeholder="date placeholder"
                                type="date"
                            />
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
                        <Button variant="primary" type="submit" onClick={()=>this.handleModal()}>
                            Registrarse
                        </Button>
                        </div>

                        </Form>
                    </Modal.Body>     
                </Modal>
            </div>
        )
    }
}

export default Register;
