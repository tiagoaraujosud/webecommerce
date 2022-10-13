import React from 'react';
import api from '../../services/api';

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

        <h1>Products List</h1>

        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        <div>
          {this.state.produtos.map(
            produto=>
            <tr key={produto.id}>
              <th>{produto.name}</th>
              <th>{produto.price}</th>
            </tr>
          )}
        </div>
      </div>
    )
  }
}
export default Products;