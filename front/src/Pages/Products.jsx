import React, { useEffect, useState } from 'react';
import './Page.css';
import api from '../services/api';

import Menu from '../Components/Menu';


class Products extends React.Component{

  state={
    produtos: []
  }

  componentDidMount(){
    api.get('/products').then(res=>{
      const dadosProdutos=res.data
      this.setState({produtos:dadosProdutos})
    })
  }

  render(){
    return(
      <div>
        {this.state.produtos.map(
          produto=>
          <div key={produto.id}> 
          
            {produto.name} - {produto.price} 
          
          </div>
        )}
      </div>
    )
  }
}
export default Products;