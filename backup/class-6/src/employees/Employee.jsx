import React, { Component } from 'react'
import data from '../data'
 class Employee extends Component {
    constructor(props){
        super(props)
        this.state= {
            data:data
        }
    }
  render() {
    return (
      <div>
        <div className="container mt-5">
        <pre>{JSON.stringify(this.state.data)}</pre>
        <div className="row">
            <div className="col-md-7">
                <table className='table'>
                    <thead className='bg-success text-white'>
                  <tr>
                     <th>id</th>
                     <th>name</th>
                     <th>email</th>
                     <th>gender</th>
                     </tr>
                    </thead>
                    <tbody>
                       {
                        this.state.data.map((emp,index) =>{
                          return <>
                          <tr key={index}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.email}</td>
                            <td>{emp.gender}</td>
                            </tr>
                            </>
                        })
                       }
                    </tbody>
                </table>
            </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Employee