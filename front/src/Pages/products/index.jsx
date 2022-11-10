import React, { useState } from "react";
import { useEffect } from "react";
import api from '../../services/api';

function Products(){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        api.get('/products').then((response) => {
            console.log(response);
            setProducts(response.data)
        }).catch((err) => {
            console.error("Error Ocurred!"+err);
        });
    }, []);

    return(
        <div>
            <h1>Products List</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <b>Id: </b>{product.id}<br/>
                        <b>Name: </b>{product.name}<br/>
                        <b>Price: </b>{product.price}<br/>
                    </li>
                ))}
            </ul>  
        </div>
    );
}

export default Products