import React from 'react';
import { useState } from 'react';

const BasicEmailValidation = () => {
    const[email, setEmail] = useState('');
    const [validError, setValidError] = useState(false)
    const handleEmailChange =(e)=>{
        const inputEmail = (e.target.value);
        setEmail(inputEmail)
     const regEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      setValidError(regEx.test(inputEmail))
    }
  return (
    <div>
        <h1>Email Validation</h1>
        <input type="text" placeholder='enter a email' value={email} onChange={handleEmailChange}/>
        {validError?(
            <p style={{color: 'green'}}>valid email adress</p>
        ) : (
            <p style={{color: 'red'}}>Invalid email adress</p>
        )}
    </div>
  )
}

export default BasicEmailValidation