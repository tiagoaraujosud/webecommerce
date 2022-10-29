import React from 'react';
import api from '../../services/api';
import './styles.css';

class User extends React.Component{

  state={
    users: []
  }

  componentDidMount(){
    api.get('/users').then(res=>{
      const dadosUsers=res.data
      this.setState({users:dadosUsers})
    })
  }

  render(){
    return(
      <div className = 'container'>
        <section className ='column'>

          <h1>Users List</h1>

          <tr>
            <div className = 'table'>
              <th>Id</th>
              <th>Name</th>
            </div>
          </tr>
          <div className = 'user'>
            {this.state.users.map(
              user=>
              <tr key={user.id}>
                <div className = 'user'>
                  <th>{user.id}</th>
                  <th>{user.email}</th>
                </div>
              </tr>
            )}
          </div>
        </section>
      </div>
    )
  }
}
export default User;