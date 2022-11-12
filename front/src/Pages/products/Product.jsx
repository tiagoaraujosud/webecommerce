import React, { useState } from "react";
import { useEffect } from "react";
import api from '../../services/api';

function Product(){

    const [product, setProduct] = useState([]);

    useEffect(() => {
        const token = window.localStorage.getItem('token');
        if(token){
            api.get('/products').then((response) => {
                setProduct(response.data)
            }).catch((err) => {
                console.error("Error Ocurred!"+err);
            });
        }    
    }, []);

    return(
        <div className="row">
                {product.map((product) => (
                    <div className="card" key={product.id}>
                        <img className="small" src={product.img} alt={product.name} />
                        <h3>{product.name}</h3>
                        <div>${product.price}</div>
                        <div>
                            <button>Add To Cart</button>
                        </div>
                    </div>
                ))}
            </div>
    )
}

export default Product