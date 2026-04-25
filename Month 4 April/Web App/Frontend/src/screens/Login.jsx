import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = async () => {
    const payload ={
      email : email,
      password : password,
    };
    const apiResponse = await axios 
    .post(`${import.meta.env.VITE_API_URL_BACKEND}/login`,payload)
    .then((res)=> navigate('/dashboard'))
    .catch((error) => console.log(error))

console.log (apiResponse ,"apiResponse ===>")
  }




  return (
    <div className='m-5'>
      <Card className='text-center'>
        <Card.Body>
          <Card.Title>Login</Card.Title>

          <form>
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
        onChange={(e)=> 
        setPassword(e.target.value)}
         />
         <br/>
         <br/>

            <button className='btn btn-success' onClick={handleLoginSubmit}>
              <a href='/dashboard' className='text-white'>Login</a>
            </button>

            <p className='text-danger'>Don't have an account? <a href="/Register" >Register</a> </p>
          </form>

          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>


    </div>
  )
}

export default Login
