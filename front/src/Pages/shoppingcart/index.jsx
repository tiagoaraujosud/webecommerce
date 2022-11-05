import React from 'react';
import api from '../../services/api';
import './styles.css';

class Cart extends React.Component{

        
  state={
    items: []
  }
  componentDidMount(){
    const id = 4;
    const token = window.localStorage.getItem('token');
    if(token){
      api.get('/items/order/'+id).then(res=>{
        const dataItems=res.data
        this.setState({items:dataItems})
      });
    }
    else{
      window.location.href = '/login';
    }
  }

  render(){
    
    return(
  
      <table className='column'>

        <h1>My Cart</h1>
          <tr>
              <th>Id Product</th>
              <th>Quantity</th>
              <th>Price</th>
          </tr>
          {this.state.items.map(
            produto=>
            <tr key={produto.id_product}>
              <th>{produto.id_product}</th>
              <th>{produto.quant}</th>
              <th>{produto.item_price}</th>
            </tr>
          )}
      </table>
    )
  }
}
export default Cart;