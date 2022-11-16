import Main from './Main';
import Basket from './Basket';
import api from '../../services/api';
import { useEffect, useState } from "react";
import './styles.css';


function ShoppingCart(){

    const [cartItems, setCartItems] = useState([]);

    const onAdd = (product) => {
        
        const exist = cartItems.find((x) => x.id === product.id);

        if(exist){
            setCartItems(cartItems.map((x) =>
                x.id === product.id ? {...exist, qty: exist.qty + 1} : x
                )
            );
        }else {
            const newCartItems = [...cartItems, {...product, qty: 1}];
            setCartItems(newCartItems);
        }
    }

    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if(exist.qty === 1){
            const newCartItems = cartItems.filter((x) => x.id !== product.id);
            setCartItems(newCartItems);
        }else{
            const newCartItems = cartItems.map((x) => 
                x.id === product.id ? {...exist, qty: exist.qty - 1} : x
            );
            setCartItems(newCartItems);
        }
    }
    
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const token = window.localStorage.getItem('token');
        if(token){
            api.get('/products').then((response) => {
                setProduct(response.data)
            }).catch((err) => {
                console.error("Error Ocurred!"+err);
            });
        }else {
            window.location.href = '/login';
        }
    }, []);

    return (
        <div>
            <div className='row'>
                <Main cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} products={product}/>
                <Basket countCartItems={cartItems.length} cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
            </div>
        </div>
    )
}

export default ShoppingCart