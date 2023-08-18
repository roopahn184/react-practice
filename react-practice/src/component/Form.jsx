import React,{useState}  from "react";
import '../component/Style.css';
  
function Form (){
    const[formData, setFormData]=useState({
        name:'',
        email:'',
        message:''

    });
    const handleInputChange =(event)=>{
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]:value,
        })
    }
    const handleSubmit =(event)=>{
        event.preventDefault();
        console.log('form submitted:', formData);
    }

    return(
        <form onSubmit={handleSubmit} className="Form-container">
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} /><br />
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} /><br />
            <label>Message</label>
            <textarea name="message" value={formData.name} onChange={handleInputChange} /><br />
            <button type="submit">submit</button>
           
        </form>
    )
}export default Form