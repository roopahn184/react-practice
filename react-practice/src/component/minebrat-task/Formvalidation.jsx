import React, { useState } from "react";

function Formvalidation(){
    const[userName, setUserName] = useState('');
    const[userPassword, setUserPassword] = useState('');
    const[userNameError, setUserNameError] = useState('');
    const[PasswordError, setPasswordError] = useState('')

    const handleUsernameChange = (e) =>{
     setUserName(e.target.value)
    }
    const handleUserpasswordChange = (e) =>{
        setUserPassword(e.target.value)
    }
    const handleSubmit = (e) =>{
      e.preventDefault()
      console.log("successfully submitted");
      if(!userName.match(/^[a-zA-Z0-9_]{5,}$/)){
      setUserNameError("usename must be at least 5 charecters")
      } else{
        setUserNameError('')
      }

      if(!userPassword.match(/^.{8,}$/)){
        setPasswordError("password must be 8 charecters")
      } else{
        setPasswordError('')
      }
    }
    return(
    <div>
        <h1>Form validation</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input type="text" value={userName} onChange={handleUsernameChange} />
                {userNameError && <div className="error">{userNameError}</div>}
            </div>
            <div>
                <label>Password:</label>
                <input type="Password" value={userPassword}  onChange={handleUserpasswordChange}/>
                {PasswordError && <div className="error">{PasswordError}</div>}
            </div>
            <button>Submit</button>
        </form>
    </div>
    )
} export default Formvalidation