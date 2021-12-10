import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';

const {Item} = Form;
const {Password} = Input;

function LogIn() {

    return (
        <div className="containerPrincipal">
            <div className="containerSecundario">
                <Form name="formulario">
                    <Item label="Usuario" name="username" 
                        rules={[{
                            required: true,
                            message: "Por favor ingrese su nombre de usuario",
                        }]}>
                        <Input />
                    </Item>

                    <Item label="Contraseña" name="password" 
                        rules={[{
                            required: true,
                            message: "Por favor ingrese su contraseña",
                        }]}>
                        <Password />
                    </Item>
                    
                    <Item name="recordar" valuePropName="checked">
                        <Checkbox>Recordar usuario</Checkbox>
                    </Item>

                    <Button type="primary" htmlType="submit">Iniciar sesión</Button>
                </Form>
            </div>
        </div>
    );
}