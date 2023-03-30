import React, { Component } from 'react';

 class UserList extends Component {
    sel_User = (user)=>{
        this.props.sel_User_Method(user)
    }
  render() {
    return <div className="container">
        <h3>User List</h3>
        <div className="row">
            <pre>{JSON.stringify(this.props)}</pre>
            <div className="col">
                <table className='table table-hover'>
                    <thead className='bg-success text-white'>
                        <tr>
                            <td>Id</td>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Email</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.users.map((user)=>{
                            return <tr key ={user.id} onClick={this.sel_User.bind(this,user)}>
                                <td>{user.Id}</td>
                                <td>{user.FirstName}</td>
                                <td>{user.LastName}</td>
                                <td>{user.Email}</td>
                            </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  }
}

export default UserList