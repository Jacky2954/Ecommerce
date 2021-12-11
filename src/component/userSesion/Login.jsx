import React from "react";
import {Modal, Button} from 'react-bootstrap';
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
                <Button className="btn btn-light ms-2" onClick={()=>this.handleModal()}>
                <i className="fa fa-sign-in me-1"></i>Ingresa</Button>

                <Modal show={this.state.showModal} onHide={()=>this.handleModal()}>
                    <Modal.Header closeButton>
                        hola 
                    </Modal.Header>

                    <Modal.Body>
                        hola 
                    </Modal.Body>

                    <Modal.Footer>
                        <Button>Abrir</Button>
                        <Button onClick={()=>this.handleModal()}>Cerrar</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default Login;
