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
            const newCartItems = cartItems.map((x) =>
                x.id === product.id ? {...exist, qty: exist.qty + 1} : x
            );
            setCartItems(newCartItems)
            localStorage.setItem('cartItems', JSON.stringify(newCartItems));
        }else {
            const newCartItems = [...cartItems, {...product, qty: 1}];
            setCartItems(newCartItems);
            localStorage.setItem('cartItems', JSON.stringify(newCartItems));
        }
    }

    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if(exist.qty === 1){
            const newCartItems = cartItems.filter((x) => x.id !== product.id);
            setCartItems(newCartItems);
            localStorage.setItem('cartItems', JSON.stringify(newCartItems));
        }else{
            const newCartItems = cartItems.map((x) => 
                x.id === product.id ? {...exist, qty: exist.qty - 1} : x
            );
            setCartItems(newCartItems);
            localStorage.setItem('cartItems', JSON.stringify(newCartItems));
        }
    }
    
    const [product, setProduct] = useState([]);

    useEffect(() => {
        setCartItems(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')):[]);
        const token = window.localStorage.getItem('token');
        const user = window.localStorage.getItem('user');
        if(token){
            if(user === 'admin@admin.com.br'){
                window.location.href = '/add_products';
            }else {api.get('/products').then((response) => {
                setProduct(response.data)
            }).catch((err) => {
                console.error("Error Ocurred!"+err);
            });}
        }else {
            alert('You must be Logged!!!')
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