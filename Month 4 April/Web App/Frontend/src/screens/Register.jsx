import { useState } from "react";
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitRegisterForm = async () => {
    const payload ={
      name : name,
      email : email,
      password : password,
    };

    const apiResponse = await axios 
    .post(`${import.meta.env.VITE_API_URL_BACKEND}/register`,payload);
   
    console.log("User registered successfully" , apiResponse.data.token);
    localStorage.setItem("token",apiResponse.data.token);

    navigate('/dashboard')

    console.log(apiResponse, "apiResponse==>");
  }
  return (
    
      <div className='m-5 text-center'>
      <Card className='text-center'>
      <Card.Body>
        <Card.Title>Register</Card.Title>

    
        <input 
        type="text" 
        placeholder='Enter Name' 
        name='name' 
        value={name}
        onChange={(e)=> setName(e.target.value)} 
        />
        <br/>
        <br/>
        <input 
        type="text" 
        placeholder='Enter Email' 
        name='email' 
        value={email}
        onChange={(e)=> setEmail(e.target.value)} 
        />
        <br/>
        <br/>
        <input 
        type="text" 
        placeholder='Enter Password' 
        name='password' 
        value={password}
        onChange={(e)=> setPassword(e.target.value)} 
        />
        <br/>
        <br/>

        <button className='btn btn-success' onClick={submitRegisterForm}>
          Register
        </button>

        <p className='text-danger'>Already have an account? <a href="/" >Login</a> </p>
      
      
        
      </Card.Body>
    </Card>
    </div>
  )
}

export default Register
