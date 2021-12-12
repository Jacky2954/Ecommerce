import React from "react";
import GoogleLogin from 'react-google-login';

function App(){
    const respuestaGoogle=(respuesta)=>{
        console.log(respuesta);
    }

    return(
        <div>
            <GoogleLogin
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                buttonText="Iniciar con Google"
                onSuccess={respuestaGoogle}
                onFailure={respuestaGoogle}
                cookiePolicy={'single_host_origin'}
            />,
        </div>    
    )
}

export default App;