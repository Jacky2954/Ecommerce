import React from 'react';
import {useEffect, useState} from 'react';
import "./barrastyle.css";


function App(){
    const [products, setProducts] = useState ([])
    const [text, setText] = useState('');
    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/`);
            setProducts(await response.json());
        }
        getProduct();
    }, []);

    const onChangeHandler = (text) => {
        let matches = []
        if (text.length>0){
            matches = products.filter(products=>{
                const regex = new RegExp(`${text}`,"gi");
                return products.title.match(regex)
            })
        }
        console.log('matches', matches)
        setSuggestions (matches)
        setText(text);
    }

    return (
        <div className="container">
 
            <input type="text" 
            className="col-md-5" 
            placeholder="  Buscar..."
            id="barraBuscar"
            onChange={e=>onChangeHandler(e.target.value)}
            value={text}
            />
            {suggestions && suggestions.map((suggestion,i)=>
            <div key={i} className="suggestion col-md-12 justify-content-md-center"
            id="contenido"
            >{suggestion.title}</div>
            )}
        </div>
        )
}


export default App;