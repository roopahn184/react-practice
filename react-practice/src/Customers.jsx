import React, { Component } from 'react'

 class Customers extends Component {
   customerNameStyle =(custName)=>{
    if(custName.startsWith("s")) return "Green-highlight";
    else if(custName.startsWith("j")) return "red-highlight";
    else return "pink-highlight";
   };
  render() {
    this.state = {
      pageTitle:"Customers",customersCount:5,
      customers:[
        {id:1,name:"scott",
        phone:"123456",
        adress:{city:"new delhi"},
        photo:"https://picsum.photos/id/1010/60"
      },
        {id:2,name:"johns",
        phone:"678901",
        adress:{city:"new delhi"},
        photo:"https://picsum.photos/id/1011/60"},
        {id:3,
          name:"allen",
          phone:"145678",
          adress:{city:"new delhi"},
        photo:"https://picsum.photos/id/1012/60"},
        {id:4,name:"james",phone:null,adress:{city:"new delhi"},photo:"https://picsum.photos/id/1013/60"},
        {id:5,name:"john",phone:null,adress:{city:"new delhi"},photo:"https://picsum.photos/id/1014/60"}
      ]
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
            <th>photo</th>
            <th>Customer Name</th>
            <th>Phone</th>
            <th>City</th>
          </tr>
          </thead>
          <tbody>
          {this.getCustomerRow()}
          </tbody>
        </table>
      </div>
    );
  }
  onRefreshClick = ()=>{  
    this.setState({customersCount:7});
   };
  onChangePicture=(cust, index)=>{
    console.log(cust);
  }
  getPhoneToRender=(phone)=>{
    if(phone){
      return phone;
    }
    else{
     return <div className='bg-warning p-2 text-center'>No phone</div>
    }
  };
  
  getCustomerRow = ()=>{
     return this.state.customers.map((cust, index)=>{
      return(
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td><img src={cust.photo} alt="customer" />
          <div>
          <button className='btn btn-sm btn-secondary' onClick={this.onChangePictureClick(cust, index)}>change picture</button>
          </div>
          </td>
          <td className={this.customerNameStyle(cust.name)}>{cust.name}</td>
          <td>{this.getPhoneToRender(cust.phone)}</td>
          <td>{cust.adress.city}</td>
        </tr>

      )
    })

  };
  onChangePictureClick=(cust, index)=>{
    // console.log(cust);
    var custArr = this.state.customers;
    custArr[index].photo="https://picsum.photos/id/1018/60";
    this.setState({customers:custArr})
  }
  
}

export default Customers