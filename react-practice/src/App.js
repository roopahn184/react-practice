import React from 'react';
// import Api  from './component/Api';
import Form from './component/Form';
import HandlingProps from './component/HandlingProps';
import HandlingState from './component/HandlingState';
import UpdateState from './component/UpdateState';


 function App (){
    return (
      <div>
        {/* <Api /> */}
        <Form/>
        <HandlingProps name="vivek" rollNumber ="23" />
        <HandlingState />
        <UpdateState />
      </div>
    )
 }export default App