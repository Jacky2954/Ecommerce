import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {FormControl, Button, InputGroup} from 'react-bootstrap';

function App(){
    const [product, setProduct] = useState ([]);
    const [productMatch, setProductMatch] = useState ([]);

    useEffect(() => {
        const loadProduct = async () => {
            const response = await axios.get('https://fakestoreapi.com/products');
            setProduct(response.data);
        };

        loadProduct();

    }, []);

    cosole.log(product);

    const searchProduct = (text) => {
        let matches = product.filtrer((product) => {
            const regex = new RegExp(`${text}`, "gi");
            return product.name.match(regex) || product.capital.match(regex);
        })
        setProductMatch(matches)
    };

    return (
        <div className="App">
            <InputGroup class="form-control mr-sm-2">
                <FormControl
                    aria-label="Example text with button addon"
                    aria-describedby="basic-addon1"
                    onChange={(e)=> searchProduct(e.target.value)}
                />
                <Button variant="btn btn-outline-light ms-2" id="button-addon1">
                    <i class="fa fa-search" aria-hidden="true"></i>
                </Button>
            </InputGroup>
            {productMatch && productMatch.map((item, index)=>(
                <div>
                    <Card style={{width: "50%"}}
                    title={`Product: ${item.name}`}>

                    </Card>
                </div>
            ))}
        </div>
    )
}