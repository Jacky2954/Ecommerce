import React, { useState, useEffect} from "react";
import {useHistory} from 'react-router-dom'

function Login(){
    const [username, setUsername]=useState("");
    const [password, setPassword]=useState("");
    const history = useHistory();

    useEffect(() => {
        if (localStorage.getItem('user.info')){
            history.push("/add")
        }
    }, [])

    async function login ()
    {
        console.warn(username, password)
        let item={username, password}
    }
}
