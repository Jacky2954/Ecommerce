import React from "react";
import {Modal, Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends React.Component {
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
        return (
            <div>
                <Button variant="btn btn-outline-light ms-2" onClick={()=>this.handleModal()}>
                <i className="fa fa-sign-in me-1"></i>Ingresa</Button>

                <Modal show={this.state.showModal} onHide={()=>this.handleModal()}>
                    <Modal.Header closeButton>
                    <h4 className="text-center">
                        Iniciar Sesión
                    </h4> 
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control type="email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={()=>this.handleModal()}>
                            Submit
                        </Button>
                        </Form>
                    </Modal.Body>     
                </Modal>
            </div>
        )
    }
}

export default Login;