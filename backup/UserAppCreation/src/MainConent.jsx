import React, { Component } from 'react'

 class MainConent extends Component {
  render() {
    this.state = {
      pageTitle:"Customers",customersCount:7,
      customers:[
        {id:1,name:"scott",phone:"123456",adress:{city:"new delhi"}},
        {id:2,name:"johns",phone:"678901",adress:{city:"new delhi"}},
        {id:3,name:"allen",phone:"145678",adress:{city:"new delhi"}},
        {id:4,name:"james",phone:null,adress:{city:"new delhi"}},
        {id:5,name:"john",phone:null,adress:{city:"new delhi"}}
      ]
    }
     this.onRefreshClick = ()=>{  
      this.setState({customersCount:7,});
     };
    return (
      <div>
        <h4 className='border-bottom m-1 p-1'>{this.state.pageTitle}
        <span className='badge badge-secondary m-2'>
          {this.state.customersCount}
        </span>
        <button className='btn btn-info' onClick={this.onRefreshClick}>Refresh</button>
        </h4>
        <table className='table'>
          <thead>
          <tr>
            <th>#</th>
            <th>customers Name</th>
            <th>phone</th>
            <th>city</th>
          </tr>
          </thead>
          <tbody>
          {this.getCustomerRow()}
          </tbody>
        </table>
      </div>
    );
  }
  getPhoneToRender=(phone)=>{
    if(phone){
      return phone;
    }
    else{
     return <div className='bg-warning text-center'>no phone</div>
    }
  };
  getCustomerRow = ()=>{
     return this.state.customers.map((cust)=>{
      return(
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>{cust.name}</td>
          <td>{this.getPhoneToRender(cust.phone)}</td>
          <td>{cust.adress.city}</td>
        </tr>

      )
    })

  }
  
}

export default MainConent