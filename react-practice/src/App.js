import React from 'react';
import Dropdown from './component/Dropdown';
import Task_two from './component/Task_two';
import BasicEmailValidation from './component/BasicEmailValidation';
import EmailValidation from './component/EmailValidation'


const App = () => {
  return (
    <div>
   <Dropdown />
   <Task_two /> 
   <BasicEmailValidation />
   <EmailValidation />
    </div>
  )
}

export default App