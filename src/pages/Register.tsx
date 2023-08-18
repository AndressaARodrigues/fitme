import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Footer from '../components/Footer';
import './Register.css';
import Button from '../UI/Button';

const Register: React.FC = () => {
  const buttonText = "Register";
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleRegistration = () => {
    if (username.trim() === '') {
      setUsernameError('Username is required');
      return;
    }

    if (password.trim() === '') {
      setPasswordError('Password is required');
      return;
    }

    const headers = {
      'X-Parse-Application-Id': 'DSiIkHz2MVbCZutKS7abtgrRVsiLNNGcs0L7VsNL',
      'X-Parse-Master-Key': '0cpnqkSUKVkIDlQrNxameA6OmjxmrA72tsUMqVG9',
      'X-Parse-Client-Key': 'zXOqJ2k44R6xQqqlpPuizAr3rs58RhHXfU7Aj20V',
      'Content-Type': 'application/json',
    };

    const data = {
      query: `
        mutation SignUp($username: String!, $password: String!) {
          signUp(input: {
            fields: {
              username: $username
              password: $password
            }
          }){
            viewer{
              user{
                id
                createdAt
              }
              sessionToken
            }
          }
        }
      `,
      variables: {
        username: username,
        password: password,
      },
    };

    axios
    .post("https://parseapi.back4app.com/graphql", data, { headers })
    .then((response) => {
      console.log("User created:", response.data);
      alert(`Registration successful!\nResponse:\n${JSON.stringify( response.data, null, 2 )}`);
    })
    .catch((error) => {
      console.error("Registration error:", error);
      alert(`Registration failed: ${error.response.data.error}`);
    });
  };

  return (
    <>
      <div className='containerTitle'>
        <h2>Register</h2>
      </div>
      <div className='formContainer'>
        <form onSubmit={handleRegistration}>
          <div className='formFieldsContainer'>
            <label>Username:</label>
            <input
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {usernameError && <p className='error'>{usernameError}</p>}
          </div>
          <div className='formFieldsContainer'>
            <label>Password:</label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <p className='error'>{passwordError}</p>}
          </div>
          <Button>{buttonText}</Button>
        </form>
      </div>
      <p className='register-message'>Dont have and account?<NavLink to="/login">Login</NavLink></p>
      <Footer />
    </>
  );
};

export default Register;
