import { useState } from 'react';
import { NavLink } from 'react-router-dom'; 
//import Axios from 'axios'; 
import Footer from '../components/Footer';
import Button from '../UI/Button';
import './Login.css';

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const buttonText = "Login";

  return (
    <>
      <div className='containerTitle'>
        <h2>Login</h2>
      </div>
      <div className='formContainer'>
        <form>
          <div className='formFieldsContainer'>
            <label>Username:</label>
            <input
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
           </div>
          <div className='formFieldsContainer'>
            <label>Password:</label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button>{buttonText}</Button>
        </form>
      </div>
      <p className='register-message'>Dont have and account?<NavLink to="/register">Register</NavLink></p>
      <Footer/>
    </>
  );
};

export default Login;
