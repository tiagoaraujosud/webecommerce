import React from 'react';
import api from '../../services/api';
import './styles.css';

class Cart extends React.Component{ 

  state={
    items: []
  }
   
  const = api.get('/products').then(res=>{
        const dataItems=res.data
        this.setState({items:dataItems})
      });
    

  render(){
    
    return(
      console.log({items})
    )
  }
}
export default Cart;