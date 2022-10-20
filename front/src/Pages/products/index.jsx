import React from 'react';
import api from '../../services/api';
import './styles.css';

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
      <div class = 'container'>
        <section class='column'>

          <h1>Products List</h1>

          <tr>
            <div class = 'table'>
              <th>Name</th>
              <th>Price</th>
            </div>
          </tr>
          <div class = 'eachproduct'>
            {this.state.produtos.map(
              produto=>
              <tr key={produto.id}>
                <div class = 'item'>
                  <th>{produto.name}</th>
                  <th>{produto.price}</th>
                </div>
              </tr>
            )}
          </div>
        </section>
      </div>
    )
  }
}
export default Products;