import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Card, FormControl, Button, InputGroup} from 'react-bootstrap';

function App(){
    const [products, setproducts] = useState ([]);
    const [productsMatch, setProductsMatch] = useState ([]);

    useEffect(() => {
        const loadproducts = async () => {
            const response = await axios.get('https://fakestoreapi.com/products');
            setproducts(response.data);
        };

        loadproducts();

    }, []);

    console.log(products);

    const searchProducts = (text) => {
        if(!text){
            setProductsMatch([]);
        }else {
        let matches = products.filtrer((products) => {
            const regex = new RegExp(`${text}`, "gi");
            return products.name.match(regex);
        })
        setProductsMatch(matches)
        }
    };

    return (
        <div className="App">
            <InputGroup class="form-control mr-sm-2">
                <FormControl
                    aria-label="Example text with button addon"
                    aria-describedby="basic-addon1"
                    onChange={(e)=> searchProducts(e.target.value)}
                />
                <Button variant="btn btn-outline-light ms-2" id="button-addon1">
                    <i class="fa fa-search" aria-hidden="true"></i>
                </Button>
            </InputGroup>
            {productsMatch && productsMatch.map((item, index)=>(
                <div key={index} style={{marginLeft:"35%", marginTop:"5px"}}>
                    <Card style={{width: "50%"}}
                    title={`products: ${item.name}`}>
                        {item.capital}
                    </Card>
                </div>
            ))}
        </div>
    )
}

export default App;