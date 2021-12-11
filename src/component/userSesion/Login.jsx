import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    state={ 
        abierto: false,
    }

    abrirModal=()=>{
        this.setState({abierto: !this.state.abierto})
    }

    render() {

        const modalStyles={
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-56%, -56%)',
        }

        return (
            <>
            <Button
                className="btn btn-outline-light ms-2"
                onClick={this.abrirModal}>
                    <i className="fa fa-sign-in me-1">
                    </i>Mostrar</Button>
            
            
            <Modal isOpen={this.state.abierto} style={modalStyles}>
                <ModalHeader>
                    Iniciar Sesión
                </ModalHeader>

                <ModalBody>
                    <FormGroup>
                        <Label for="usuario">Usuario</Label>
                        <Input type="text" id="usuario" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="password">Contraseña</Label>
                        <Input type="text" id="password" />
                    </FormGroup>
                </ModalBody>

                <ModalFooter>
                    <Button
                        color="primary"
                    >Ingresar
                    </Button>

                    <Button
                        color="secondary"
                        onClick={this.abrirModal}
                    >Cancelar
                    </Button>
                </ModalFooter>
            </Modal>
            </>
        )
    }
}





export default App;


  