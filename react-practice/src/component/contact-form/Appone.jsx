import React from 'react';
import './style.css';
import Submitform from './Submitform';

function Appone(){

    return <>
    <form onSubmit={Submitform}
    action="https://www.greatfrontend.com/api/questions/contact-form"
    method="post">
        <h1>Contact us</h1>
        <div>
            <label htmlFor='name-input'>Name:</label>
            <input type="text" id='name-input' name='name' placeholder='enter a name' />
        </div>
        <div>
            <label htmlFor='email-input'>Email:</label>
            <input type="email" id='email-input' name='email' placeholder='enter a email' />
        </div>
        <div>
            <label htmlFor='message-input'>Message:</label>
            <textarea id='message-input' name='message' />
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
    </>
} export default Appone