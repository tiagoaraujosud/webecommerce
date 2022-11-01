import React from 'react';
import api from '../../services/api';
import './styles.css';

class Products extends React.Component{

  state={
    produtos: []
  }
  componentDidMount(){
    const getToken = window.sessionStorage.getItem('token');
    const token = JSON.stringify(getToken);
    if(token){
      api.get('/products').then(res=>{
        const dadosProdutos=res.data
        this.setState({produtos:dadosProdutos})
      });
    }
    else{
      window.location.href = '/login';
    }
  }

  render(){
    
    return(
  
      <table className='column'>

        <h1>Products List</h1>
          <tr>
              <th>Name</th>
              <th>Price</th>
          </tr>
          {this.state.produtos.map(
            produto=>
            <tr key={produto.id}>
              <th>{produto.name}</th>
              <th>{produto.price}</th>
              <th><a className="logo" href=""><img src='https://st.depositphotos.com/1005920/1832/i/600/depositphotos_18323389-stock-photo-shopping-cart-green-glossy-icon.jpg'></img></a></th>
            </tr>
          )}
      </table>
    )
  }
}
export default Products;