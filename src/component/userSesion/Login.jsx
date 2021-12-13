import React from "react";
import {Modal, Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./loginstyle.css";
import GoogleLogin from 'react-google-login';
import axios from "axios";
import md5 from "md5";
import cookies from "universal-cookies";


const baseUrl = "http://localhost:3001/usuarios";

const Cookies = new cookies();

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

    iniciarSesion=async()=>{
        await axios.get(baseUrl, 
            {params:{username:this.state.form.username,
            contraseña: md5 (this.state.form.contraseña)}})
            .then(response=>{
                return response.data;
            })

            .then(response=>{
                if(response.length>0){
                    const respuesta=response[0] ('id', respuesta.id, {path:"/"}); 
                    cookies.set('id', respuesta.id, {path:"/"});
                    cookies.set('nombre', respuesta.nombre, {path:"/"});
                    cookies.set('username', respuesta.username, {path:"/"});
                    cookies.set('email', respuesta.email, {path:"/"});
                    cookies.set('contraseña', respuesta.contraseña, {path:"/"});

                    alert('Bienvenio(a) ${respuesta.nombre}');

                }else{
                    alert('El usuario o contraseña no son correctos')
                }
            })

            .catch(error=>{
                console.log(error);
            })    
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
                            <Form.Control type="password" name="contraseña" onChange={this.handleChange}/>
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
